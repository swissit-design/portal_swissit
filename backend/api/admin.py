from django.contrib import admin
from .models import Client, Product, ClientProduct, Payment, Invoice, InvoiceProduct

@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'created_at', 'updated_at')
    search_fields = ('name', 'email', 'phone')
    list_filter = ('created_at', 'updated_at')
    readonly_fields = ('created_at', 'updated_at')
    fieldsets = (
        ('Basic Information', {
            'fields': ('user', 'name', 'email', 'phone', 'address')
        }),
        ('Additional Information', {
            'fields': ('extra_info',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'stock', 'created_at', 'updated_at')
    search_fields = ('name', 'description')
    list_filter = ('created_at', 'updated_at')
    readonly_fields = ('created_at', 'updated_at')
    fieldsets = (
        ('Basic Information', {
            'fields': ('name', 'description', 'price', 'stock')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

@admin.register(ClientProduct)
class ClientProductAdmin(admin.ModelAdmin):
    list_display = ('client', 'product', 'assigned_at')
    search_fields = ('client__name', 'product__name')
    list_filter = ('assigned_at',)
    readonly_fields = ('assigned_at',)

@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ('client', 'amount', 'method', 'date')
    search_fields = ('client__name',)
    list_filter = ('method', 'date')
    readonly_fields = ('date',)

@admin.register(Invoice)
class InvoiceAdmin(admin.ModelAdmin):
    list_display = ('id', 'client', 'total_amount', 'issued_date', 'due_date', 'status')
    search_fields = ('client__name',)
    list_filter = ('status', 'issued_date', 'due_date')
    readonly_fields = ('issued_date',)

@admin.register(InvoiceProduct)
class InvoiceProductAdmin(admin.ModelAdmin):
    list_display = ('invoice', 'product', 'quantity')
    search_fields = ('invoice__id', 'product__name')
    list_filter = ('quantity',)
