from django.db import models

# Create your models here.
class Categorias(models.Model):
    nombre=models.CharField(max_length=200)
    pub_date=models.DateTimeField('date published')

    def __str__(self):
        return self.nombre

class Productos(models.Model):
    nombre=models.CharField(max_length=100)
    descripcion=models.CharField(max_length=500)
    categoria=models.ForeignKey(Categorias,on_delete=models.CASCADE)
    '''categoria=models.CharField(max_length=100)'''
    precio=models.DecimalField(max_digits = 7,decimal_places=2)
    img1=models.CharField(max_length=500)
    img2=models.CharField(max_length=500)
    img3=models.CharField(max_length=500)
    pub_date=models.DateTimeField('date published')

    def __str__(self):
        return self.nombre

class Usuarios(models.Model):
    username=models.CharField(max_length=50)
    first_name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    password=models.CharField(max_length=16)
    address = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    perfil_image = models.ImageField(upload_to="users", null=True)
    def __str__(self):
        return self.username