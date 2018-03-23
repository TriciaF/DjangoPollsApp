from django.urls import path
from django.views.generic import TemplateView
from django.conf.urls import url
from django.contrib import admin

from . import views
app_name = 'polls'
urlpatterns = [
  # url('', TemplateView.as_view(template_name="index.html")),
  # ex: /polls/
  path('', views.IndexView.as_view(), name='index'),
  # ex: /polls/5/
  path('<int:pk>/', views.DetailView.as_view(), name='detail'),
  # ex: /polls/5/results/
  path('<int:pk>/results/', views.ResultsView.as_view(), name='results'),
  # ex: /polls/5/vote/
  path('<int:question_id>/vote/', views.vote, name='vote'),
]