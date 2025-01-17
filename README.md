# 🌐 [Portfolio Project with Supabase & Django](https://aryansawant.onrender.com/)

Welcome to the **Portfolio Project**, a robust and scalable web application to showcase projects, achievements, and personal branding. This project leverages the power of **Django** for backend development and **Supabase** as a modern, versatile backend-as-a-service (BaaS) to streamline data storage and retrieval.

---

## 🚀 Features

- **Dynamic Sections:** Update sections (like Projects, Achievements, About) on the fly via Supabase.
- **Portfolio Management:** Manage creative and technical portfolios with achievements.
- **Supabase Integration:** Seamless integration with Supabase for querying and managing project data.
- **Responsive Design:** A front-end (not included here) built to look great on all devices.
- **Django ORM Support:** Local database fallback using Django's ORM for syncing data with Supabase.
- **RESTful APIs:** Extendable APIs powered by Supabase and Django for future scalability.

---

## 🛠️ Technologies Used

### Backend
- **Django**: A high-level Python web framework.
- **Django ORM**: For managing and querying local databases.
- **Supabase**: Backend-as-a-service for real-time database and authentication.
  
### Frontend (not included in this repo)
- **HTML/CSS/JS**: For rendering templates and user interface.
- **Django Templates**: Dynamic HTML rendering with context.

### Others
- **Environment Variables**: Managed securely using `.env` files.
- **Deployment**: Ready for deployment on platforms like Heroku, Vercel, or AWS.

---

## 🎯 Getting Started

### Prerequisites
1. Python (>= 3.8)
2. Pipenv or pip for dependency management
3. A Supabase account and project

---

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/portfolio-project.git
   cd portfolio-project
   ```

2. **Set up a virtual environment:**
   ```bash
   python -m venv env
   source env/bin/activate  # On Windows, use `env\Scripts\activate`
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables:**
   Create a `.env` file in the root directory and add:
   ```
   SUPABASE_URL=https://your-supabase-url.supabase.co
   SUPABASE_API_KEY=your-supabase-api-key
   ```

5. **Apply migrations:**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

6. **Run the development server:**
   ```bash
   python manage.py runserver
   ```

7. **Access the application:**
   Visit `http://127.0.0.1:8000` in your browser.

---

## 🌟 Key Modules

### Supabase Integration
- Initialize Supabase client in `views.py`:
  ```python
  from supabase import create_client

  SUPABASE_URL = 'https://your-supabase-url.supabase.co'
  SUPABASE_API_KEY = 'your-supabase-api-key'

  supabase = create_client(SUPABASE_URL, SUPABASE_API_KEY)
  ```
- Query examples:
  ```python
  creative_projects = supabase.from_('portfolio_app_creative').select('*').execute().data
  ```

### Views
- **Dynamic Section Updates:**
  - `update_sectionc`: Fetches creative portfolio data.
  - `update_sectiont`: Fetches technical portfolio data.
  - `project_detail`: Displays individual project details.

---

## 📂 Project Structure

```
portfolio-project/
├── portfolio_app/
│   ├── migrations/
│   ├── templates/
│   │   ├── partials/
│   │   │   ├── creative/
│   │   │   ├── technical/
│   ├── views.py
│   ├── models.py
├── manage.py
├── requirements.txt
├── settings.py
```

---

## 🧪 Testing

Run the test suite:
```bash
python manage.py test
```

---

## 🌐 Deployment

1. **Prepare for Deployment:**
   Update `ALLOWED_HOSTS` in `settings.py` and ensure `.env` is configured for production.

2. **Deploy on Platform:**
   - Use platforms like Heroku, AWS, or Vercel.
   - Configure environment variables in the platform settings.

---

## 💡 Challenges and Learnings

### Challenges
- Learning Supabase integration with Django.
- Syncing local and remote databases seamlessly.
- Managing environment variables securely for multiple environments.

### Learnings
- Supabase’s real-time database capabilities.
- Optimizing Django for modular and scalable applications.
- Bridging backend services (Supabase) with frontend rendering (Django templates).

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements.

---

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## 📧 Contact

Feel free to reach out for collaboration or queries:
- **Email:** aryan.j.sawant@gmail.com
- **GitHub:** [aryanjsawant](https://github.com/aryanjsawant)
- **LinkedIn:** [Aryan Sawant](https://www.linkedin.com/in/aryan-j-sawant/)
