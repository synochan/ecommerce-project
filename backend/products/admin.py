from django.contrib import admin
from .models import Category, Product, Review, Order, OrderedItem

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'created_at')
    search_fields = ('name',)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'available', 'featured', 'created_at')
    search_fields = ('name',)
    list_filter = ('available', 'featured', 'category')

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('id', 'product', 'customer', 'rating', 'created_at')
    search_fields = ('product__name', 'customer__email')

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'customer', 'total_price', 'status', 'created_at')
    search_fields = ('customer__email',)
    list_filter = ('status',)

@admin.register(OrderedItem)
class OrderedItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'order', 'product', 'quantity', 'subtotal')
    search_fields = ('order__id', 'product__name')
