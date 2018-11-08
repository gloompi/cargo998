from django.db import models
from ckeditor.fields import RichTextField
from ckeditor.widgets import CKEditorWidget

# Create your models here.
class PagesModel(models.Model):
  slug = models.SlugField()
  title = models.CharField(max_length=150, verbose_name="Название")
  content = RichTextField(verbose_name='Контент')

  class Meta:
    verbose_name = 'Страница'
    verbose_name_plural = 'Страницы'

  def __str__(self):
    return str(self.title)