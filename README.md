# JobPortal 🚀

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge\&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge\&logo=prisma)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38BDF8?style=for-the-badge\&logo=tailwind-css\&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1?style=for-the-badge\&logo=postgresql\&logoColor=white)
![NextAuth](https://img.shields.io/badge/Auth.js-GitHub_Login-black?style=for-the-badge\&logo=github)
![Netlify](https://img.shields.io/badge/Hosted_on-Netlify-00C7B7?style=for-the-badge\&logo=netlify\&logoColor=white)

A modern full-stack **Job Portal** built using **Next.js**, **Prisma ORM**, **Tailwind CSS**, and **PostgreSQL (Neon DB)** with secure GitHub authentication using **NextAuth.js/Auth.js**.

🌐 **Live Demo:**
https://jobportal102.netlify.app

---

# ✨ Features

* 🔐 GitHub Authentication using NextAuth.js/Auth.js
* 🧑‍💼 Post and manage jobs
* 🔍 Browse and search jobs
* 📄 Detailed job pages
* 📬 Apply for jobs
* 📊 Personalized dashboard
* ⚡ Modern responsive UI
* ☁️ Hosted on Netlify
* 🗄️ PostgreSQL database using Neon
* 🔄 Real-time database updates with Prisma ORM

---

# 🛠️ Tech Stack

| Technology          | Usage                      |
| ------------------- | -------------------------- |
| Next.js             | Full-stack React Framework |
| TypeScript          | Type Safety                |
| Prisma ORM          | Database ORM               |
| Tailwind CSS        | Styling                    |
| PostgreSQL          | Database                   |
| Neon                | Serverless PostgreSQL      |
| NextAuth.js/Auth.js | Authentication             |
| Netlify             | Deployment                 |

---

# 🔐 Authentication

This project uses **GitHub OAuth Authentication** with **NextAuth.js/Auth.js**.

* Secure GitHub login
* Session management
* User authentication middleware
* PostgreSQL-based session storage
* Supports Neon PostgreSQL or self-hosted PostgreSQL

---

# 📌 Project Flow

## 👤 Guest User Flow

```txt
User
   ↓
Home Page
   ↓
Browse Jobs
   ↓
View Job Details
```

---

## 🔐 Authenticated User Flow

```txt
User
   ↓
GitHub Authentication
   ↓
Dashboard
   ↓
Post Job / Apply Job
```

---

## 📬 Application Flow

```txt
Authenticated User
        ↓
Apply Job
        ↓
Prisma ORM
        ↓
PostgreSQL Database Update
        ↓
Application Stored
        ↓
View Application in Dashboard
```

---

# 📸 Live Demo

🌐 https://jobportal102.netlify.app

You can also upload screenshots or demo GIFs here later.

Example:

```md
![Home Page](./screenshots/home.png)
```

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/hireon.git
```

Move into the project:

```bash
cd Job_Portal
```

Install dependencies:

```bash
npm install / pnpm install
```

---

# 🔑 Environment Variables

Create a `.env` file in the root directory.

```env
DATABASE_URL="your_database_url"

AUTH_SECRET="your_auth_secret"

GITHUB_ID="your_github_client_id"
GITHUB_SECRET="your_github_client_secret"
```

---

# 🗄️ Prisma Setup

Generate Prisma client:

```bash
npx prisma generate
```

Push schema to database:

```bash
npx prisma db push
```

---

# ▶️ Run Locally

```bash
npm run dev
```

Visit:

```txt
http://localhost:3000
```

---

# ☁️ Deployment

This project is deployed using:

* Netlify
* Neon PostgreSQL

🌐 Live Website:

https://jobportal102.netlify.app

---

# 📁 Project Structure

```txt
app/
 ├── api/
 ├── auth/
 ├── dashboard/
 ├── jobs/

components/
lib/
prisma/
```

---

# 🚀 Future Improvements

* Resume uploads
* Admin dashboard
* Email notifications
* Company profiles
* Advanced filtering
* Bookmark jobs
* Real-time notifications

---

# 👨‍💻 Author

Built with ❤️ using Next.js, Prisma ORM, and PostgreSQL.

---

# 📜 License

This project is licensed under the MIT License.
