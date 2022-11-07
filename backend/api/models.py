from django.db import models

# Create your models here.
class Productos(models.Model):
    nombre=models.CharField(max_length=100)
    descripcion=models.CharField(max_length=500)
    categoria=models.CharField(max_length=100)
    precio=models.DecimalField(max_digits = 7,decimal_places=2)
    img=models.CharField(max_length=500)

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