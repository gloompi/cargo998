from django.db import models

# Create your models here.
class SectionFourModel(models.Model):
  slug = models.SlugField()
  title = models.CharField(max_length=150, verbose_name='Название')
  descr = models.CharField(max_length=200, verbose_name='Описание')

  class Meta:
    verbose_name = 'Секция 4'
    verbose_name_plural = 'Секция 4'

  def __str__(self):
    return str(self.title)