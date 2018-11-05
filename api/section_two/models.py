from django.db import models

# Create your models here.
class SectionTwoModel(models.Model):
  slug = models.SlugField()
  title = models.CharField(max_length=150, verbose_name="Название")
  description = models.CharField(max_length=550, verbose_name="Описание")

  class Meta:
    verbose_name = 'Секция 2'
    verbose_name_plural = 'Секция 2'

  def __str__(self):
    return str(self.title)