from django.db import models

def upload_path(instance, filename):
  """
  Path to files
  :param instance:
  :param filename:
  :return:
  """
  return "section5/{0}".format(filename)

# Create your models here.
class SectionFifeModel(models.Model):
  slug = models.SlugField()
  title = models.CharField(max_length=150, verbose_name='Название')
  descr = models.CharField(max_length=300, verbose_name='Описание')

  class Meta:
    verbose_name = 'Секция 5'
    verbose_name_plural = 'Секция 5'

  def __str__(self):
    return str(self.title)

class PartnerModel(models.Model):
  image = models.ImageField(blank=True, upload_to=upload_path, verbose_name='Картинка')
  section = models.ForeignKey(
    'SectionFifeModel',
    on_delete=models.PROTECT,
    related_name='partners',
    verbose_name='Партнеры'
  )

  class Meta:
    verbose_name = 'Партнер'
    verbose_name_plural = 'Партнеры'