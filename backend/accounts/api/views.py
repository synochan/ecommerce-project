from django.contrib.auth import get_user_model
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import RegisterSerializer


# Registration view
class RegisterView(generics.CreateAPIView):
    queryset = get_user_model().objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"message": "User registered successfully."}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)





def login_view(request):
    email = request.data.get('email')
    password = request.data.get('password')

    if not email or not password:
        return Response({'error': 'Email and password are required.'}, status=400)

    try:
        user = get_user_model().objects.get(email=email)
    except get_user_model().DoesNotExist:
        return Response({'error': 'Invalid credentials'}, status=400)

    if user.check_password(password):
        refresh = RefreshToken.for_user(user)
        return Response({'access_token': str(refresh.access_token)}, status=200)
    
    return Response({'error': 'Invalid credentials'}, status=400)

