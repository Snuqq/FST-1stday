from django.urls import path
from . import views
urlpatterns = [
    path('products', views.get_products, name="products"),
    path('products_detail/<int:pk>/', views.get_products_details, name="get_product_details"),
    path('register/', views.register_user, name="register")
]
