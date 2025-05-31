from django.db import models

# Create your models here.
class DestinosTuristicos (models.Model):
    nombreCiudad       = models.CharField(max_length=100)
    imagenCiudad       = models.ImageField(upload_to='pics')
    descripcionCiudad  = models.TextField()
    precioTour         = models.IntegerField()
    ofertaTour         = models.BooleanField(default=False)

    def __str__(self):
        return self.nombreCiudad