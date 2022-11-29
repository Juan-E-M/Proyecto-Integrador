from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class Usuarios(AbstractUser):
    username=models.CharField(max_length=255,unique=True)
    password = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    first_name=models.CharField(max_length=255)
    last_name=models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    perfil_image = models.ImageField(upload_to="users", null=True)
    USERNAME_FIELD = 'username'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = []


class Productos(models.Model):
    nombre=models.CharField(max_length=100)
    descripcion=models.CharField(max_length=500)
    categoria=models.CharField(max_length=100)
    precio=models.DecimalField(max_digits = 7,decimal_places=2)
    img1=models.CharField(max_length=500)
    img2=models.CharField(max_length=500)
    img3=models.CharField(max_length=500)
    pub_date=models.DateTimeField('date published')

    def __str__(self):
        return self.nombre

class Compras(models.Model):

    user_id=models.ForeignKey(Usuarios, on_delete=models.CASCADE)
    username = models.CharField(max_length=50)
    descripcion_compra = models.TextField()
    total = models.DecimalField(max_digits=7, decimal_places=2)
    first_name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    send_email = models.EmailField(max_length=100)
    send_address=models.CharField(max_length=100)
    distrito = models.CharField(max_length=50)
    provincia = models.CharField(max_length=50)
    departamento = models.CharField(max_length=50)
    full_name_card = models.CharField(max_length=200)
    card_number = models.CharField(max_length=200)
    exp_date = models.DateField()
    cod = models.CharField(max_length=3)
    def __str__(self):
        return self.username

class Proyectos(models.Model):
    titulo = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=1000)
    lugar = models.CharField(max_length=50, null=True)
    imagen = models.CharField(max_length=500)
    fecha = models.DateTimeField('Fecha del Evento', null=True)
    pub_date = models.DateTimeField('Date Published', null=True)
    def __str__(self):
        return self.titulo

class Tcontrol_plastico(models.Model):
    user_id = models.ForeignKey(Usuarios, on_delete=models.CASCADE)
    porcentaje = models.FloatField()
    reg_date = models.DateTimeField('fecha')

class Tcontrol_vidrio(models.Model):
    user_id = models.ForeignKey(Usuarios, on_delete=models.CASCADE)
    porcentaje = models.FloatField()
    reg_date = models.DateTimeField('fecha')

class Tcontrol_papel(models.Model):
    user_id = models.ForeignKey(Usuarios, on_delete=models.CASCADE)
    porcentaje = models.FloatField()
    reg_date = models.DateTimeField('fecha')

class T_all_register(models.Model):
    user_id = models.ForeignKey(Usuarios, on_delete=models.CASCADE)
    type = models.CharField(max_length=50)
    reg_date = models.DateTimeField('fecha')
