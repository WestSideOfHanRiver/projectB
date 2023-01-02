from django.contrib import admin

from .models import Article, Score

admin.site.register(Article)
admin.site.register(Score)
# class ArticlesAdmin(admin.ModelAdmin):
#     pass
# admin.site.register(Article,ArticlesAdmin)
class ScoreAdmin(admin.ModelAdmin):
    list_display = ("survey1",)
# admin.site.register(Score,ScoreAdmin)