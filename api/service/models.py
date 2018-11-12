from django.db import models

# Create your models here.
class ServiceModel(models.Model):
  slug = models.SlugField(verbose_name="Иконка")
  title = models.CharField(max_length=150, verbose_name="Название Услуги")
  descr = models.CharField(max_length=250, verbose_name="Описание Услуги")

  class Meta:
    verbose_name = 'Услуга'
    verbose_name_plural = 'Услуги'

  def __str__(self):
    return str(self.title)