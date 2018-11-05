from django.db import models
from ckeditor.fields import RichTextField
from ckeditor.widgets import CKEditorWidget

# Create your models here.
class SectionOneModel(models.Model):
  slug = models.SlugField()
  title = models.CharField(max_length=150, verbose_name="Название")
  longtitle = models.CharField(max_length=150, verbose_name="Доп. название")
  description = RichTextField(verbose_name="Описание")

  class Meta:
    verbose_name = 'Секция 1'
    verbose_name_plural = 'Секция 1'

  def __str__(self):
    return str(self.title)