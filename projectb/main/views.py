from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from .models import Article
from .serializers import AriticleSerializer


class ListArticle(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = AriticleSerializer


class DetailArticle(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = AriticleSerializer
    
    # 조회수 코드
    def get(self, request,pk): 
        queryset = Article.objects.get(id=pk)
        queryset.hits += 1
        queryset.save() 
        serializer = AriticleSerializer(queryset)
        return Response(serializer.data)
    

