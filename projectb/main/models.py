from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=50) # title 컬럼
    content = models.TextField()             # content 컬럼

    hits = models.PositiveIntegerField(default = 0) # 조회수
    shares = models.PositiveIntegerField(default = 0) # 공유수
    image = models.ImageField(upload_to='images/',blank=True, null=True) # 대문 이미지업로드
    scores = models.CharField(max_length=100,default ='') # 점수배열
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)
    