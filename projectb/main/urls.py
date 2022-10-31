from django.urls import path

from .views import ListArticle, DetailArticle, ResultArticle


urlpatterns = [
    path('', ListArticle.as_view()),
    path('<int:pk>/', DetailArticle.as_view()),
    path('<int:pk>/scores', ResultArticle.as_view()),
]