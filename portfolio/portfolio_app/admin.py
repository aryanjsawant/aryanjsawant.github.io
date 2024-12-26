from django.contrib import admin
from .models import Technical, Creative, TechnicalAchievements, CreativeAchievements
from django.contrib.auth.models import User, Group

# Unregister the User and Group models from the admin site
admin.site.unregister(User)
admin.site.unregister(Group)

admin.site.register(Technical)
admin.site.register(Creative)
admin.site.register(TechnicalAchievements)
admin.site.register(CreativeAchievements)