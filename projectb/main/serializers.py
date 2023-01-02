# backend/post/serializers.py
from rest_framework import serializers
from .models import Article

class AriticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = (
            'id',
            'title',
            'content',
            'hits',
            'shares',
            'image',
        )
     