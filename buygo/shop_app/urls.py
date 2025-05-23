from django.urls import path
from . import views

urlpatterns = [
    path("products", views.products, name="products"),
    path("products/<slug:slug>", views.product_detail, name="product_detail"),
    path("add_item/", views.add_item, name="add_item"),
    path("product_in_cart", views.product_in_cart, name="product_in_cart"),
    path("get_cart_stat", views.get_cart_stat, name="get_cart_stat"),
    path("get_cart", views.get_cart, name="get_cart"),
]

#fetching all products http://127.0.0.1:8000/products/