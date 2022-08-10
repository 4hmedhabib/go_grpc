from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
# our end point for the music room app
def main(request):
    return HttpResponse("Hello, world. You're at the music room app main page.")