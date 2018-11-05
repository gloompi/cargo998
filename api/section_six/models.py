from django.db import models

# Create your models here.
class SectionSixModel(models.Model):
  slug = models.SlugField()
  title = models.CharField(max_length=150, verbose_name='Название')
  description = models.CharField(max_length=500, verbose_name='Описание')
  address = models.CharField(max_length=150, verbose_name='Адресс')
  email = models.CharField(max_length=150, verbose_name='Email')

  class Meta:
    verbose_name = 'Секция 6'
    verbose_name_plural = 'Секция 6'

  def __str__(self):
    return str(self.title)

class PhoneModel(models.Model):
  phone = models.CharField(max_length=150, verbose_name='Номер')
  section = models.ForeignKey(
    'SectionSixModel',
    on_delete=models.PROTECT,
    related_name='phones',
    verbose_name='Секция'
  )

  class Meta:
    verbose_name = 'Номер телефона'
    verbose_name_plural = 'Номера телефонов'

  def __str__(self):
    return str(self.phone)