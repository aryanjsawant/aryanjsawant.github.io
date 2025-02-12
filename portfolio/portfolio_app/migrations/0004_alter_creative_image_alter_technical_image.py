# Generated by Django 5.1.4 on 2024-12-26 14:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio_app', '0003_alter_creative_image_alter_technical_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='creative',
            name='image',
            field=models.URLField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='technical',
            name='image',
            field=models.URLField(max_length=500, null=True),
        ),
    ]
