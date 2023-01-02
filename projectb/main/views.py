from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from .models import Article
from .serializers import AriticleSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view


@csrf_exempt
@api_view(['GET', 'POST'])
def ArticleList(request): # 메인페이지
    queryset = Article.objects.all()
    print(queryset)
    return HttpResponse(queryset)


@csrf_exempt
@api_view(['GET', 'POST'])
def Survey(request,pk): # 설문페이지
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


@csrf_exempt
@api_view(['GET', 'POST'])
def Result(request): # 결과페이지
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

