from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Document, User

# Register your models here.

class UserAdmin(UserAdmin):
    model = User
    fieldsets =  (None, {
        'fields':('email',),
    },),

admin.site.register(User,UserAdmin)
admin.site.register(Document)