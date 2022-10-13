from django.db import models

# Create your models here.
class Productos(models.Model):
    id=models.IntegerField()
    nombre=models.CharField(max_length=100)
    descripcion=models.CharField(max_length=500)
    categoria=models.CharField(max_length=100)
    precio=models.DecimalField(max_digits = 7,decimal_places=2)
    img=models.CharField(max_length=500)

    def __str__(self):
        return self.nombre