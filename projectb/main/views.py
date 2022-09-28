from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from .models import Article
from .serializers import AriticleSerializer

class ListArticle(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = AriticleSerializer

class DetailArticle(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = AriticleSerializer
