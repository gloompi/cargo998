# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-11-05 03:04
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('section_six', '0002_auto_20181105_0242'),
    ]

    operations = [
        migrations.CreateModel(
            name='PhoneModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phone', models.CharField(max_length=150, verbose_name='Номер')),
            ],
            options={
                'verbose_name': 'Номер телефона',
                'verbose_name_plural': 'Номера телефонов',
            },
        ),
        migrations.RemoveField(
            model_name='sectionsixmodel',
            name='phone',
        ),
        migrations.AddField(
            model_name='phonemodel',
            name='section',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='phones', to='section_six.SectionSixModel', verbose_name='Секция'),
        ),
    ]
