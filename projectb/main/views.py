from http.client import HTTPResponse
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
    
 
class ResultArticle(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = AriticleSerializer

    def get(request, score, pk): # json 파일
        # queryset = Article.objects.get(id=pk)
        # queryset.scores[pk] = score
        # queryset.save()
        return (HTTPResponse('넘어온 데이터'+score))

    
