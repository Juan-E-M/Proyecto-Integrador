from django.db import models

# Create your models here.
class Productos(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=500)
    categoria = models.CharField(max_length=100)
    precio = models.DecimalField(max_digits = 7,decimal_places=2)
    img = models.CharField(max_length=500)
    pub_date = models.DateTimeField('Date Published', null=True)

    def __str__(self):
        return self.nombre

class Usuarios(models.Model):
    username = models.CharField(max_length=50)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    password = models.CharField(max_length=16)
    address = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    perfil_image = models.ImageField(upload_to="users", null=True)
    pub_date = models.DateTimeField('Date Published', null=True)
    
    def __str__(self):
        return self.username

class Proyectos(models.Model):
    titulo = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=50)
    imagen = models.CharField(max_length=500)
    pub_date = models.DateTimeField('Date Published', null=True)

    def __str__(self):
        return self.titulo

