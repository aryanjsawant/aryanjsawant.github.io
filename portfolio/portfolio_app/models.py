from django.db import models
from .processing import processor

class Technical(models.Model):
    image = models.ImageField(upload_to='technical/', blank=False, null=False)
    header = models.CharField(max_length=255, blank=False, null=False)
    description = models.TextField(blank=False, null=False)

    def save(self, *args, **kwargs):
        # Ensure header is title-cased before saving
        if self.header:
            self.header = self.header.title()

        # Process the description field before saving
        self.description = processor(self.description)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.header


class Creative(models.Model):
    image = models.ImageField(upload_to='creative/', blank=False, null=False)
    header = models.CharField(max_length=255, blank=False, null=False)
    description = models.TextField(blank=False, null=False)

    def save(self, *args, **kwargs):
        # Ensure header is title-cased before saving
        if self.header:
            self.header = self.header.title()

        # Process the description field before saving
        self.description = processor(self.description)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.header

class TechnicalAchievements(models.Model):
    achievement = models.TextField()  # The only column for achievements

    def __str__(self):
        return self.achievement  # Display the achievement text when needed


class CreativeAchievements(models.Model):
    achievement = models.TextField()  # The only column for achievements

    def __str__(self):
        return self.achievement  # Display the achievement text when needed