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

**How to Create an Admin Account:**

There is no separate sign-up page for administrators. An admin account is created automatically:

1.  Navigate to the **Login** page (either by going to `/login` or clicking the "Admin" link in the navigation).
2.  Enter any valid email and a password of your choice (minimum 6 characters).
3.  Click "Login".

The first time you do this with a new email address, the system will automatically create a new admin account for you and log you in. For subsequent logins, you will use the same credentials.

**Managing Proposals:**

*   The admin dashboard at `/admin` displays a table of all submitted book proposals.
*   You can see key information like the author's name, book title, and submission date.
*   To view more details for a specific proposal (like the biography, aims & scope, and table of contents), click the chevron icon (`>`) on the left side of the row to expand it.
*   You can also use the action menu (`...` icon) on the right side for additional actions like copying the proposal ID.
