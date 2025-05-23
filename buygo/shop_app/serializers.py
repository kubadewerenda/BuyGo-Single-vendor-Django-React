from rest_framework import serializers
from .models import Product, Cart, CartItem

#Serializer-Konwertuje nasze dane z django np. z modelow baz danych 
# do formatu JSON ktory przesylamy w Response() do frontendu 
#waliduje dande przychodzące z frontendu

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

class DetailedProductSerializer(serializers.ModelSerializer):
    similar_products = serializers.SerializerMethodField()
    class Meta:
        model = Product
        fields = ["id", "name", "price", "slug", "image", "description", "similar_products"]
    
    def get_similar_products(self, product):
        products = Product.objects.filter(category=product.category).exclude(id=product.id)
        serializer = ProductSerializer(products, many=True)
        return serializer.data

class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    total = serializers.SerializerMethodField()
    class Meta:
        model = CartItem 
        fields = ["id", "quantity", "product", "total"]
    
    def get_total(self,cart_item):
        return cart_item.quantity * cart_item.product.price

class CartSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(read_only=True, many=True)
    sum_total = serializers.SerializerMethodField()
    num_of_items = serializers.SerializerMethodField()
    class Meta:
        model = Cart
        fields = ["id", "cart_code", "items", "sum_total", "num_of_items", "created_at", "modified_at"]

    def get_sum_total(self, cart):
        items = cart.items.all()
        total = sum([item.product.price * item.quantity for item in items ])
        return total
    
    def get_num_of_items(self, cart):
        items = cart.items.all()
        total = sum([item.quantity for item in items])
        return total
            
class SimpleCartSerializer(serializers.ModelSerializer):
    num_of_items = serializers.SerializerMethodField()#Uztywa naszej funkcji -> get_number_of_items
    class Meta:
        model = Cart
        fields = ["id", "cart_code", "num_of_items"]

    def get_num_of_items(self, cart):
        num_of_items = sum([item.quantity for item in cart.items.all()])
        return num_of_items
