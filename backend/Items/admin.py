from django.contrib import admin
from .models import Item  # Import your model

@admin.register(Item)  # Decorator to register the model
class ItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'description')  # Customize the display

# Alternatively, use this if you don't want customization:
# admin.site.register(Item)
