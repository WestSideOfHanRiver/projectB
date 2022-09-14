from django.contrib import admin

from .models import Article

class ArticlesAdmin(admin.ModelAdmin):
    list_display = ['id','title','image']
admin.site.register(Article,ArticlesAdmin)