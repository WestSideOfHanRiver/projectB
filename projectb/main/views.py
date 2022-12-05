from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from .models import Article
from .serializers import AriticleSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
# class ListArticle(generics.ListCreateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = AriticleSerializer


# class DetailArticle(generics.ListCreateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = AriticleSerializer
    
#     # 조회수 코드
#     def get(self, request,pk): 
#         queryset = Article.objects.get(id=pk)
#         queryset.hits += 1
#         queryset.save() 
#         serializer = AriticleSerializer(queryset)
#         return Response(serializer.data)
    
 
# class ResultArticle(generics.ListCreateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = AriticleSerializer

#     def get(request, score, pk): # json 파일
#         # queryset = Article.objects.get(id=pk)
#         # queryset.scores[pk] = score
#         # queryset.save()
#         return (HTTPResponse('넘어온 데이터'+score))
@csrf_exempt
@api_view(['GET', 'POST'])
def Result(request):
    if request.method == 'GET':
        # 페이지를 불러올 때
        
        print('GET')
        return 
    elif request.method == 'POST':
        # 페이지 내에서 POST 발생 시
        print('POST')
        print(request.data)
        # username = request.POST['username']
        # password = request.POST['password']
        # re_password = request.POST['re-password']
 
        # users = BookUsers(
        #     username = username,
        #     password = password
        # )
        # users.save()
 
        return HttpResponse(request.data)
