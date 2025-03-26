# Alma Test Project

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd alma-test
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Login Instructions

To access the dashboard, use the following credentials:

- **Username:** `admin`
- **Password:** `admin`

### Project Structure

- **`/src/app`**: Contains the main application pages and API routes.
- **`/src/components`**: Reusable components like `Sidebar`, `Header`, etc.
- **`/src/styles`**: Styled-components for consistent styling.
- **`/src/utils`**: Utility functions like authentication helpers.

### API Endpoints

- **GET `/api/leads`**: Fetches the list of leads displayed on the dashboard.

### Testing

Run the tests using the following command:
```bash
npm test
# or
yarn test
```

### License

This project is licensed under the MIT License.
