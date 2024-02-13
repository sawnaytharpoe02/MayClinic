# Pet Clinic CRUD Application

This is a simple CRUD (Create, Read, Update, Delete) application for managing a pet clinic, built as a single-page application. The application includes features such as CRUD operations, pagination, search, and filtering.

## Technologies Used

- **Frontend:**
  - Next.js: A React framework for building server-side rendered and statically generated web applications.
  - TypeScript: A statically typed superset of JavaScript that enhances code quality and developer productivity.
  - Material-UI (MUI): A popular React UI framework for designing modern, responsive web interfaces.
  - React Hook Form: A performant form validation and handling library for React applications.
  - Zod: A TypeScript-first schema declaration and validation library.
  - React-Toastify: A toast notification library for React applications.

- **Backend:**
  - Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications.
  - Express: A minimalist web application framework for Node.js that provides robust features for building web and mobile applications.
  - MongoDB: A NoSQL database program, using JSON-like documents with schema.

## Installation

1. **Clone Repository:**
   ```bash
   git clone <https://github.com/sawnaytharpoe02/MayClinic.git>
   cd MayClinic
   ```

2. **Install Dependencies:**
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd backend
   npm install
   ```

3. **Environment Configuration:**
   - Configure environment variables for MongoDB connection in `backend/.env` file.

4. **Run the Application:**
   ```bash
   # Run frontend and backend concurrently
   npm run dev
   ```

5. **Access the Application:**
   - Once the application is running, access it via [http://localhost:3000](http://localhost:3000) in your web browser.

## Usage

- Upon accessing the application, you will be able to perform CRUD operations on pet clinic data.
- Use the pagination feature to navigate through multiple pages of data.
- Utilize the search functionality to find specific pet clinic records.
- Apply filters to narrow down the displayed pet clinic data.

## Contributors

- [Saw Nay Thar Poe](https://github.com/sawnaytharpoe02)
