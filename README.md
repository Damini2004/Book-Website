# Malhotra Publishing House Website

This is a Next.js application for Malhotra Publishing House, an academic publisher. It includes a public-facing website for authors and readers, and a secure admin dashboard for managing book proposals.

## Getting Started

To run the application locally, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:9002`.

## Features

### For Authors and Visitors

*   **Browse Content:** Visitors can explore pages like "About Us", "Books", "Journals", and "Contact".
*   **Book Proposal Submission:** Authors can navigate to the **"Book Proposal"** page to submit their work. The page provides:
    *   Detailed guidelines on what to include in a proposal.
    *   An AI-powered tool to generate a summary from a draft file.
    *   A comprehensive form to formally submit the book proposal.

### For Administrators

The website includes a secure admin section to manage submitted book proposals.

1.  **Accessing the Admin Dashboard:**
    *   Navigate to the `/admin` page or click the "Admin" link in the navigation bar.
    *   You will be redirected to the login page if you are not already authenticated.

2.  **Logging In:**
    *   On the login page (`/login`), enter your email and password.
    *   If you are a new admin user, an account will be automatically created for you with the credentials you provide.
    *   Upon successful login, you will be redirected to the admin dashboard.

3.  **Managing Proposals:**
    *   The admin dashboard displays a table of all submitted book proposals.
    *   You can see key information like the author's name, book title, and submission date.
    *   To view more details for a specific proposal (like the biography, aims & scope, and table of contents), click the chevron icon (`>`) on the left side of the row to expand it.
    *   You can also use the action menu (`...` icon) on the right side for additional actions like copying the proposal ID.

This setup allows for secure and organized management of all incoming book proposals.
