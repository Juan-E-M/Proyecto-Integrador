from django.test import TestCase

from . import views
from .models import *


# Create your tests here.

class TestViews(TestCase):

    def setUp(self):

        Tcontrol_papel.objects.create(user_id=Usuarios.objects.create(
            id=1,
            username="test",
                                password = "1234",
                                email = "a@33gmail.com",
                                first_name="name_test",
                                last_name="lastname_test",
                                address = "address"), porcentaje=12.3, reg_date="2022-12-01")

        Tcontrol_plastico.objects.create(user_id=Usuarios.objects.create(
            id=2,
            username="test2",
            password="1234",
            email="a@332gmail.com",
            first_name="name_test",
            last_name="lastname_test",
            address="address"), porcentaje=12.3, reg_date="2022-12-01")

        Tcontrol_vidrio.objects.create(user_id=Usuarios.objects.create(
            id=3,
            username="test3",
            password="1234",
            email="a@333gmail.com",
            first_name="name_test",
            last_name="lastname_test",
            address="address"), porcentaje=12.3, reg_date="2022-12-01")



    def test_get_ok(self):
        Response = self.client.get("/api/rpapel")
        self.assertEqual(Response.status_code, 200)
        self.assertEqual(Response.resolver_match.view_name, 'api:papel')
        self.assertEqual(Response.resolver_match.func.view_class, views.Tcontrol_papelView)

    def test_get_rp(self):
        response = self.client.get("/api/rpapel")
        self.assertEqual(response.content,
                         b'[{"id":4,"user_id":1,"porcentaje":12.3,"reg_date":"2022-12-01T00:00:00Z"}]')

    def test_get_ok3(self):
        Response = self.client.get("/api/rplastico")
        self.assertEqual(Response.status_code, 200)
        self.assertEqual(Response.resolver_match.view_name, 'api:plastico')
        self.assertEqual(Response.resolver_match.func.view_class, views.Tcontrol_plasticoView)

    def test_get_rpl(self):
        response = self.client.get("/api/rplastico")
        self.assertEqual(response.content,
                         b'[{"id":5,"user_id":2,"porcentaje":12.3,"reg_date":"2022-12-01T00:00:00Z"}]')

    def test_get_ok2(self):
        Response = self.client.get("/api/rvidrio")
        self.assertEqual(Response.status_code, 200)
        self.assertEqual(Response.resolver_match.view_name, 'api:vidrio')
        self.assertEqual(Response.resolver_match.func.view_class, views.Tcontrol_vidrioView)

    def test_get_rv(self):
        response = self.client.get("/api/rvidrio")
        self.assertEqual(response.content,
                         b'[{"id":6,"user_id":3,"porcentaje":12.3,"reg_date":"2022-12-01T00:00:00Z"}]')