# Full Stack Blog Application

A full-stack blog application built with Node.js, Express, MongoDB, JavaScript, HTML, and CSS. This application allows users to create, edit, and delete blog posts, and engage with content.

## Features

- Create, edit, and delete blog posts
- Display all blog posts in a structured format
- Individual post pages with full content view
- Responsive design with CSS for mobile and desktop views
- Basic validation of forms (e.g., for login/signup)

## Technologies Used

- **Node.js**: JavaScript runtime environment for building the server-side logic
- **Express.js**: Web application framework for creating APIs
- **MongoDB**: NoSQL database for storing user and blog post data
- **JavaScript (ES6+)**: Front-end scripting and back-end logic
- **HTML & CSS**: For building the front-end user interface
- **Mongoose**: ODM for MongoDB, simplifies database operations
- **EJS (or another templating engine, if applicable)**: Dynamic views and rendering templates

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tankarageldi/blog-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo-name
   ```

3. Install dependencies:

   ```bash
   npm i
   ```

4. Create a `.env` file in the root directory and add the following environment variables:

   ```makefile
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   ```

5. Run the application:

   ```bash
   nodemon app.js
   ```

6. Open your browser and visit `http://localhost:3000`.

## Usage

- To create a blog post, sign up or log in using your credentials.
- Once logged in, you can add a new blog post, which will be displayed on the home page.
- You can edit or delete your own posts from the post's detail page.
