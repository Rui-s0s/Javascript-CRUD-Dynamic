# 📝 Dynamic JavaScript CRUD (MVC)

A full-stack web application demonstrating a robust **Model-View-Controller (MVC)** architecture. This project allows users to create, read, update, and delete posts, featuring a "Like" system with optimistic UI updates and real-time client-side reordering.

## 🚀 Features

*   **Full CRUD Functionality:** Create, Read, Update, and Delete posts seamlessly.
*   **MVC Architecture:** Clean separation of concerns between Models (data), Views (UI), and Controllers (logic).
*   **Optimistic UI Updates:** Likes are reflected instantly in the UI before the server responds, providing a snappy user experience.
*   **Dynamic Reordering:** Posts are automatically reordered in real-time based on the number of likes.
*   **PostgreSQL Integration:** Persistent data storage using a relational database.
*   **Server-Side Rendering:** Powered by Express and EJS.

## 🛠 Tech Stack

*   **Backend:** [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
*   **Database:** [PostgreSQL](https://www.postgresql.org/)
*   **Templating:** [EJS](https://ejs.co/)
*   **Frontend:** Vanilla JavaScript, CSS
*   **Environment Management:** [dotenv](https://www.npmjs.com/package/dotenv)

## 📁 Project Structure

```text
Javascript-CRUD-Dynamic/
├── controllers/    # Request handling and business logic
├── models/         # Database schemas and queries
├── public/         # Static assets (CSS, Client-side JS)
├── routes/         # URL routing definitions
├── views/          # EJS templates
├── app.js          # Application entry point
└── database.sql    # SQL schema for setup
```

## ⚙️ Setup & Installation

### 1. Database Setup
Ensure you have PostgreSQL installed. You can use the commands found in `database.sql` to initialize your database:

```sql
CREATE DATABASE crudDB;
\c crudDB;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    post TEXT NOT NULL,
    likes INT NOT NULL DEFAULT 0
);
```

### 2. Environment Configuration
Create a `.env` file in the root directory and add your PostgreSQL connection string:
```env
DATABASE_URL=postgres://your_user:your_password@localhost:5432/crudDB
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Application
Development mode (with nodemon):
```bash
npm run devStart
```
The server will start at `http://localhost:3000`.

## 📖 Usage

1.  **Create:** Enter text in the input field and click "Create".
2.  **Edit:** Click the "Edit" button to modify a post's content via a prompt.
3.  **Like:** Click "Like" to increment the counter. Notice the post move up the list if it surpasses others in popularity!
4.  **Delete:** Click "Delete" to remove a post permanently.

---
*"Applying professional architectural patterns to modern web development."*
