from django.db import models

class CustomUser(models.Model):
    email = models.EmailField(max_length=25, null=True, unique=True)
    mobile = models.CharField(max_length=20, null=True, unique=True)
    fullname = models.CharField(max_length=30)
    username= models.CharField(max_length=12, unique=True)
    password = models.CharField(max_length=14,)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username
