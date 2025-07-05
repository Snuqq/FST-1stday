from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Product(models.Model):
    product_name = models.CharField(max_length=255)
    product_price = models.DecimalField(max_digits=10, decimal_places=2)
    brand = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    countInStock = models.IntegerField()
    image = models.ImageField(upload_to='product_images/')
    createdAt = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return f"Product Name: {self.product_name}, Stock: {self.countInStock}"
    
class CartUser(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    qty = models.IntegerField()
    
    def __str__(self):
        return f"Username: {self.user.username}, ProductName: {self.product.product_name}"
    
