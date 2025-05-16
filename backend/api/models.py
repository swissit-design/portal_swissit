from django.db import models
from django.contrib.auth.models import User
class Client(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='client_profile')
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    extra_info = models.TextField(blank=True, null=True)  # Long text for additional information
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class ClientProduct(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='client_products')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='client_products')
    assigned_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.client.name} assigned to {self.product.name}"

class Payment(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='payments')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    method = models.CharField(max_length=50, choices=[
        ('credit_card', 'Credit Card'),
        ('paypal', 'PayPal'),
        ('bank_transfer', 'Bank Transfer'),
        ('cash', 'Cash')
    ])
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.client.name} - {self.amount} {self.method}"

class Invoice(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='invoices')
    products = models.ManyToManyField(Product, through='InvoiceProduct', related_name='invoices')
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    issued_date = models.DateTimeField(auto_now_add=True)
    due_date = models.DateTimeField()
    status = models.CharField(max_length=20, choices=[
        ('paid', 'Paid'),
        ('unpaid', 'Unpaid'),
        ('overdue', 'Overdue')
    ], default='unpaid')

    def __str__(self):
        return f"Invoice {self.id} - {self.client.name}"


class InvoiceProduct(models.Model):
    invoice = models.ForeignKey(Invoice, on_delete=models.CASCADE, related_name='invoice_products')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='invoice_products')
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.invoice.id} - {self.product.name} x{self.quantity}"