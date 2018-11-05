from django.db import models

# Create your models here.
class PagesModel(models.Model):
  slug = models.SlugField()
  title = models.CharField(max_length=150, verbose_name="Название")

  class Meta:
    verbose_name = 'Страница'
    verbose_name_plural = 'Страницы'

  def __str__(self):
    return str(self.title)