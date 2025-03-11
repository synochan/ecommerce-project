from rest_framework import serializers
from .models import Category, Product, Review, Order, OrderedItem

# Category Serializer
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

# Product Serializer
class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = '__all__'

    def get_image_url(self, obj):
        if obj.image:
            return obj.image.url  # ✅ Cloudinary provides a direct URL
        return None

# Review Serializer
class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

# Ordered Item Serializer
class OrderedItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderedItem
        fields = '__all__'

# Order Serializer
class OrderSerializer(serializers.ModelSerializer):
    ordered_items = OrderedItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = '__all__'
