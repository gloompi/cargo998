from django.db import models

def upload_path(instance, filename):
  """
  Path to files
  :param instance:
  :param filename:
  :return:
  """
  return "gallery/{0}".format(filename)

# Create your models here.
class Gallery(models.Model):
  src = models.ImageField(blank=True, upload_to=upload_path, verbose_name='Картинка')

  class Meta:
    verbose_name = 'Картинка'
    verbose_name_plural = 'Картинки'