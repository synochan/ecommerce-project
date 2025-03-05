from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import register, logout, user_info

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('logout/', logout, name='logout'),
    path('user/', user_info, name='user_info'),
]
