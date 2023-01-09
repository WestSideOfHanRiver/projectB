from django.urls import path
from . import views

app_name = 'main'

urlpatterns = [
    path('', views.ArticleList, name ='ArticleList'),
    path('result/', views.Result, name='Result'),
    path('survey/<int:pk>/', views.Survey, name ='Survey'),
] 