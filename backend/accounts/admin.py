from django.contrib import admin
from .models import CustomUser
from .forms import CustomerUserCreationForm, CustomerUserChangeForm
from django.contrib.auth.admin import UserAdmin

# Register your models here.
@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    add_form = CustomerUserCreationForm
    form = CustomerUserChangeForm

    model = CustomUser

