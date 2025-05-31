from django.shortcuts import render
from .models import DestinosTuristicos

# Create your views here.
def index (request):
    dests = DestinosTuristicos.objects.all()
    return render(request, "index.html", {'dests': dests})