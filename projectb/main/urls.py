from django.urls import path

from .views import ListReview, DetailReview

urlpatterns = [
    path('', ListReview.as_view()),
    path('<int:pk>/', DetailReview.as_view()),
]