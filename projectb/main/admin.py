from django.contrib import admin

from .models import Article

class ArticlesAdmin(admin.ModelAdmin):
    list_display = ['id','title','image','scores','created_at','updated_at']
admin.site.register(Article,ArticlesAdmin)