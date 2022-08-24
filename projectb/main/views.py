
from django.shortcuts import render
from rest_framework import generics

from .models import Review
from .serializers import ReviewSerializer

class ListReview(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class DetailReview(generics.RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

# from rest_framework import status
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from django.http import Http404

# from .serializers import ReviewSerializer
# from .models import Review

# class ReviewList(APIView):
#     def get(self, request):
#         reviews = Review.objects.all()
#         serializers = ReviewSerializer(reviews, many =True)
#         return Response(serializers.data)

#     def post(self, request):
#         reviews = Review.objects.all()
#         serializer = ReviewSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status = status.HTTP_201_CREATED)
#         return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)
