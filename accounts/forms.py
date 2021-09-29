from django import forms
from django.contrib.auth.forms import User
from .models import CustomUser


class CustomUserCreationForm(forms.ModelForm):
    class Meta:
        model = CustomUser
        fields ='__all__'