# Webteknologi 2023 - Blog Application

This README provides an overview of a simple blog management system implemented using Node.js and HTML/JavaScript. The system allows you to log in as an administrator to access the admin panel and create, update, and delete blog posts.

## Table of Contents

- [System Overview](#system-overview)
- [File Structure](#file-structure)
- [Dependencies](#dependencies)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## System Overview

The blog management system consists of the following main components:

1. **Frontend HTML/JavaScript**: The frontend is implemented using HTML, JavaScript, and CSS. It includes a admin panel and a home page where the blog posts are shown.
2. **Backend (Node.js)**: The backend is built using Node.js and Express.js. It provides API endpoints for managing blog posts and user authentication.

3. **Database (JSON Files)**: Blog posts and administrator credentials are stored as JSON files on the server.

## File Structure

- `public/`: Contains static CSS and JavaScript files used in the frontend.
- `routes/`: Contains Express.js route handlers for managing blog posts and user authentication.
- `views/`: Contains HTML templates for different pages.
- `app.js`: The main Node.js application file.
- `package.json`: Configuration file for project dependencies and settings.
- `create.html`, `index.html`, `login.html`: HTML templates for the respective frontend pages.
- `create.js`, `login.js`, `main.js`, `navMenu.js`: JavaScript files for handling frontend functionality.
- `blogposts.js`, `loginBackend.js`: Backend route handlers for managing blog posts and user authentication.

## Dependencies

- Express.js: A web application framework for Node.js.
- Body-parser: Middleware for parsing request bodies.
- Express-session: Middleware for handling user sessions.
- Nodemon (Development)

These dependencies are listed in the `package.json` file.

## Getting Started

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/wroan92/arbeidskrav_webteknologi
   ```

2. Navigate to the project directory:

   ```bash
   cd arbeidskrav_webteknologi
   ```

3. Install the project dependencies using npm:

   ```bash
   npm install
   ```

4. Start the Node.js server:

   ```bash
   npm start
   ```

5. Open a web browser and access the application at `http://localhost:3000`.

## Usage

- **Admin Login**:
- An administrator user for the blog is set up.
- Admin credentials are stored in a JSON file or as a variable in the code.
- Login details:

  - **Username:** Admin
  - **Password:** Gokstad2023

- **Creating a Blog Post**: Access the admin panel by logging in with valid credentials. Then, navigate to the "Create New Post" section and fill in the author's name, title, and content. Click the "Create" button to add a new blog post.

- **Updating a Blog Post**: In the admin panel, go to the "Update Post" section. Select a blog post to update from the dropdown, and modify the author's name, title, or content as needed. Click the "Update" button to save your changes.

- **Deleting a Blog Post**: In the admin panel, go to the "Delete Post" section. Choose a blog post from the dropdown, and click the "Delete" button. A confirmation dialog will appear before deleting the post.

- **Viewing Blog Posts**: The homepage displays a list of blog posts with their titles, authors, and creation dates.

## Contributing

Contributions to this project are welcome. You can open issues for bug reports or suggest enhancements. If you want to contribute code, please fork the repository and create a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
