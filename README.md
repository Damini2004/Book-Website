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

**How to Log In as an Admin:**

Admin accounts must be created directly in the Firebase Authentication console.

1.  Go to your Firebase project's console.
2.  Navigate to the **Authentication** section.
3.  Go to the **Users** tab and click **"Add user"**.
4.  Enter the email and a secure password for the new admin.

Once the account is created, the admin can log in on the website:

1.  Navigate to the **Login** page (either by going to `/login` or clicking the "Admin" link in the navigation).
2.  Enter the email and password that were set up in the Firebase console.
3.  Click "Login".

**Managing Proposals:**

*   The admin dashboard at `/admin` displays a table of all submitted book proposals.
*   You can see key information like the author's name, book title, and submission date.
*   To view more details for a specific proposal (like the biography, aims & scope, and table of contents), click the chevron icon (`>`) on the left side of the row to expand it.
*   You can also use the action menu (`...` icon) on the right side for additional actions like copying the proposal ID.
