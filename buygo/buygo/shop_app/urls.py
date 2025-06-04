from django.urls import path
from . import views

urlpatterns = [
    path("products", views.products, name="products"),
    path("products/<slug:slug>", views.product_detail, name="product_detail"),
]

#fetching all products http://127.0.0.1:8000/products/