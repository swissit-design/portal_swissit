from django.test import TestCase, Client
from django.contrib.auth.models import User
from django.utils import timezone
from datetime import timedelta
from decimal import Decimal
from .models import Client as ClientModel, Product, ClientProduct, Payment, Invoice, InvoiceProduct
from django.urls import reverse
import json

class ModelTests(TestCase):
    def setUp(self):
        # Create test user
        self.user = User.objects.create_user(
            username='testuser',
            email='test@example.com',
            password='testpass123'
        )
        
        # Create test client
        self.client = ClientModel.objects.create(
            user=self.user,
            name='Test Client',
            email='client@example.com',
            phone='1234567890',
            address='Test Address'
        )
        
        # Create test product
        self.product = Product.objects.create(
            name='Test Product',
            description='Test Description',
            price=Decimal('99.99'),
            stock=10
        )

    def test_client_creation(self):
        self.assertEqual(self.client.name, 'Test Client')
        self.assertEqual(self.client.email, 'client@example.com')
        self.assertTrue(isinstance(self.client, ClientModel))

    def test_product_creation(self):
        self.assertEqual(self.product.name, 'Test Product')
        self.assertEqual(self.product.price, Decimal('99.99'))
        self.assertTrue(isinstance(self.product, Product))

    def test_client_product_assignment(self):
        client_product = ClientProduct.objects.create(
            client=self.client,
            product=self.product
        )
        self.assertEqual(client_product.client, self.client)
        self.assertEqual(client_product.product, self.product)

    def test_payment_creation(self):
        payment = Payment.objects.create(
            client=self.client,
            amount=Decimal('99.99'),
            method='credit_card'
        )
        self.assertEqual(payment.client, self.client)
        self.assertEqual(payment.amount, Decimal('99.99'))
        self.assertEqual(payment.method, 'credit_card')

    def test_invoice_creation(self):
        invoice = Invoice.objects.create(
            client=self.client,
            total_amount=Decimal('99.99'),
            due_date=timezone.now() + timedelta(days=30)
        )
        self.assertEqual(invoice.client, self.client)
        self.assertEqual(invoice.total_amount, Decimal('99.99'))
        self.assertEqual(invoice.status, 'unpaid')

    def test_invoice_product_creation(self):
        invoice = Invoice.objects.create(
            client=self.client,
            total_amount=Decimal('99.99'),
            due_date=timezone.now() + timedelta(days=30)
        )
        invoice_product = InvoiceProduct.objects.create(
            invoice=invoice,
            product=self.product,
            quantity=2
        )
        self.assertEqual(invoice_product.invoice, invoice)
        self.assertEqual(invoice_product.product, self.product)
        self.assertEqual(invoice_product.quantity, 2)

class APITests(TestCase):
    def setUp(self):
        # Use Django's built-in test client
        self.client = Client()
        
        self.test_user_data = {
            "username": "testuser@example.com",
            "password": "TestPass123!"
        }

    def test_register_user(self):
        # Use Django's test client to make a request to the API
        response = self.client.post(
            "/api/register", 
            data=json.dumps(self.test_user_data),
            content_type="application/json"
        )
        
        # Check response
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), {"message": "User created successfully"})
        
        # Verify user was created in database
        self.assertTrue(User.objects.filter(username=self.test_user_data["username"]).exists())

    def test_register_duplicate_user(self):
        # Create user first
        self.client.post(
            "/api/register", 
            data=json.dumps(self.test_user_data),
            content_type="application/json"
        )
        
        # Try to create same user again
        response = self.client.post(
            "/api/register", 
            data=json.dumps(self.test_user_data),
            content_type="application/json"
        )
        
        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.content), {"detail": "User already exists"})

    def test_register_weak_password(self):
        weak_password_data = {
            "username": "testuser2@example.com",
            "password": "123"  # Too short
        }
        
        response = self.client.post(
            "/api/register", 
            data=json.dumps(weak_password_data),
            content_type="application/json"
        )
        
        self.assertEqual(response.status_code, 400)

    def test_test_endpoint(self):
        response = self.client.get("/api/test")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json.loads(response.content), {"test": "success"})
