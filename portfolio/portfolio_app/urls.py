from . import views
from django.urls import path
from .views import update_sectionc, update_sectiont, project_detail

urlpatterns = [
    path('', views.index, name='home'),
    path('update-sectionc/', update_sectionc, name='update_sectionc'),
    path('update-sectiont/', update_sectiont, name='update_sectiont'),
    path('projects/<slug:project_name>/', project_detail, name='project_detail'),
]
