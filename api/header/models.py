from django.db import models

def upload_path(instance, filename):
  """
  Path to files
  :param instance:
  :param filename:
  :return:
  """
  return "about/{0}".format(filename)

# Create your models here.
class HeaderModel(models.Model):
  slug = models.SlugField(unique=True)
  logo = models.ImageField(blank=False, upload_to=upload_path, verbose_name='Логотип')

  class Meta:
    verbose_name = 'Шапка'
    verbose_name_plural = 'Шапка'

  def __str__(self):
    return str(self.slug)