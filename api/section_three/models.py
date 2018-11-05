from django.db import models
from ckeditor.fields import RichTextField
from ckeditor.widgets import CKEditorWidget

def upload_path(instance, filename):
  """
  Path to files
  :param instance:
  :param filename:
  :return:
  """
  return "section3/{0}".format(filename)

# Create your models here.
class SectionThreeModel(models.Model):
  slug = models.SlugField()
  title = models.CharField(max_length=150, verbose_name="Название")
  content = RichTextField(verbose_name='Контент')
  cover_pic = models.ImageField(blank=True, upload_to=upload_path, verbose_name='Картинка')

  class Meta:
    verbose_name = 'Секция 3'
    verbose_name_plural = 'Секция 3'

  def __str__(self):
    return str(self.title)