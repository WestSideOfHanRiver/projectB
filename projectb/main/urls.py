from django.urls import path

# from .views import ListArticle, DetailArticle, ResultArticle,
from . import views

app_name = 'main'

urlpatterns = [
    # path('', ListArticle.as_view()),
    # path('<int:pk>/', DetailArticle.as_view()),
    # path('<int:pk>/scores', ResultArticle.as_view()),
    path('result/', views.Result, name='Result'),
]