from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    email = request.data.get('email')  # Use email instead of username
    password = request.data.get('password')

    if not email or not password:
        return Response({'error': 'Email and password are required'}, status=400)

    if User.objects.filter(email=email).exists():
        return Response({'error': 'Email already exists'}, status=400)

    user = User.objects.create_user(username=email, email=email, password=password)

    refresh = RefreshToken.for_user(user)

    return Response({
        'message': 'User created successfully',
        'access': str(refresh.access_token),
        'refresh': str(refresh)
    })


@api_view(['POST'])
@permission_classes([AllowAny])
def logout(request):
    try:
        refresh_token = request.data.get("refresh")
        token = RefreshToken(refresh_token)
        token.blacklist()
        return Response({'message': 'Logged out successfully'})
    except Exception:
        return Response({'error': 'Invalid token'}, status=400)


@api_view(['GET'])
def user_info(request):
    return Response({'username': request.user.username})
