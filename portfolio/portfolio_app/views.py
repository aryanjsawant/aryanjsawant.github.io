from django.shortcuts import render, get_object_or_404
from .models import Technical, Creative, TechnicalAchievements, CreativeAchievements
from django.http import JsonResponse
from django.template.loader import render_to_string

def index(request):
    return render(request, 'index.html', None)

def update_sectionc(request):
    creative_projects = Creative.objects.values('id', 'header', 'image')
    creative_achievements = CreativeAchievements.objects.values('achievement')

    section = request.GET.get('section', 'about')
    if section == 'about':
        content = render_to_string('partials/creative/about.html')
    elif section == 'projects':
        content = render_to_string('partials/projects.html', {'projects': creative_projects, 'c' : 0})
    elif section == 'achievements':
        content = render_to_string('partials/achievements.html', {'achievements': creative_achievements})
    elif section == 'links':
        content = render_to_string('partials/creative/links.html')
    else:
        content = "<p> </p>"

    return JsonResponse({'content': content})

def update_sectiont(request):
    technical_projects = Technical.objects.values('id', 'header', 'image')
    technical_achievements = TechnicalAchievements.objects.values('achievement')

    section = request.GET.get('section', 'about')
    if section == 'about':
        content = render_to_string('partials/technical/about.html')
    elif section == 'projects':
        content = render_to_string('partials/projects.html', {'projects': technical_projects, 'c' : 1})
    elif section == 'achievements':
        content = render_to_string('partials/achievements.html', {'achievements': technical_achievements})
    elif section == 'links':
        content = render_to_string('partials/technical/links.html')
    else:
        content = "<p> </p>"

    return JsonResponse({'content': content})

def project_detail(request, project_name):
    # Normalize the project name to match the header
    normalized_name = project_name.replace('-', ' ').title()

    # Attempt to fetch from Technical
    project_object_t = Technical.objects.filter(header=normalized_name).first()

    if project_object_t:
        return render(request, 'projects/technical.html', {'project': project_object_t})

    # Attempt to fetch from Creative
    project_object_c = Creative.objects.filter(header=normalized_name).first()

    if project_object_c:
        return render(request, 'projects/creative.html', {'project': project_object_c})

    # If no project found, render a "not found" template or return a 404 response
    return render(request, '404.html', status=404)