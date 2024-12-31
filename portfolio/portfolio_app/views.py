import os
from supabase import create_client, Client
from django.shortcuts import render
from django.http import JsonResponse
from django.template.loader import render_to_string

# Initialize Supabase client using environment variables
SUPABASE_URL = os.getenv('NEXT_PUBLIC_SUPABASE_URL', 'https://sunmyicoswdaxftcixbb.supabase.co')
SUPABASE_API_KEY = os.getenv('NEXT_PUBLIC_SUPABASE_ANON_KEY', 'your-supabase-api-key')
# SUPABASE_URL = 'https://sunmyicoswdaxftcixbb.supabase.co'
# SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1bm15aWNvc3dkYXhmdGNpeGJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyMDUyMTIsImV4cCI6MjA1MDc4MTIxMn0.-rLZp8pkPQYK2sVxYsJ2d4E6fH2QYJoaGTHs0TjT_PU'
supabase: Client = create_client(SUPABASE_URL, SUPABASE_API_KEY)

def index(request):
    return render(request, 'index.html', None)

def update_sectionc(request):
    """Fetch Creative data from Supabase."""
    try:
        creative_projects = supabase.from_('portfolio_app_creative').select('id', 'header', 'image').execute().data
        creative_achievements = supabase.from_('portfolio_app_creativeachievements').select('achievement').execute().data

        section = request.GET.get('section', 'about')
        if section == 'about':
            content = render_to_string('partials/creative/about.html')
        elif section == 'projects':
            content = render_to_string('partials/projects.html', {'projects': creative_projects, 'c': 0})
        elif section == 'achievements':
            content = render_to_string('partials/achievements.html', {'achievements': creative_achievements})
        elif section == 'links':
            content = render_to_string('partials/creative/links.html')
        else:
            content = "<p> </p>"

        return JsonResponse({'content': content})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

def update_sectiont(request):
    """Fetch Technical data from Supabase."""
    try:
        technical_projects = supabase.from_('portfolio_app_technical').select('id', 'header', 'image').execute().data
        technical_achievements = supabase.from_('portfolio_app_technicalachievements').select('achievement').execute().data

        section = request.GET.get('section', 'about')
        if section == 'about':
            content = render_to_string('partials/technical/about.html')
        elif section == 'projects':
            content = render_to_string('partials/projects.html', {'projects': technical_projects, 'c': 1})
        elif section == 'achievements':
            content = render_to_string('partials/achievements.html', {'achievements': technical_achievements})
        elif section == 'links':
            content = render_to_string('partials/technical/links.html')
        else:
            content = "<p> </p>"

        return JsonResponse({'content': content})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

def project_detail(request, project_name):
    """Fetch project details from Supabase."""
    try:
        # Normalize the project name to match the header
        normalized_name = project_name.replace('-', ' ').title()

        # Attempt to fetch from Technical
        project_object_t = supabase.from_('portfolio_app_technical').select('*').eq('header', normalized_name).execute().data
        if project_object_t:
            return render(request, 'projects/technical.html', {'project': project_object_t[0]})

        # Attempt to fetch from Creative
        project_object_c = supabase.from_('portfolio_app_creative').select('*').eq('header', normalized_name).execute().data
        if project_object_c:
            return render(request, 'projects/creative.html', {'project': project_object_c[0]})

        # If no project found, render a "not found" template or return a 404 response
        return render(request, '404.html', status=404)
    except Exception as e:
        return render(request, '500.html', {'error': str(e)}, status=500)
