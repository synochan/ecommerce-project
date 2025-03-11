from rest_framework import viewsets
from .models import Category, Product, Review, Order, OrderedItem
from .serializers import (
    CategorySerializer, ProductSerializer, ReviewSerializer,
    OrderSerializer, OrderedItemSerializer
)
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

# Category ViewSet
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

# Product ViewSet
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

# Review ViewSet
class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(customer=self.request.user)

# Order ViewSet
class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(customer=self.request.user)

# Ordered Item ViewSet
class OrderedItemViewSet(viewsets.ModelViewSet):
    queryset = OrderedItem.objects.all()
    serializer_class = OrderedItemSerializer
    permission_classes = [IsAuthenticated]
