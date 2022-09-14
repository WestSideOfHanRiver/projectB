from django.urls import path

from .views import ListArticle, DetailArticle

urlpatterns = [
    path('', ListArticle.as_view()),
    path('<int:pk>/', DetailArticle.as_view()),
]