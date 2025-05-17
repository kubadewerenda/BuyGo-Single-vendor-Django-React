from django.urls import path
from . import views

urlpatterns = [
    path("products", views.products, name="products")
]

#fetching all products http://127.0.0.1:8000/products/