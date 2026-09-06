# React HTTP Network Interactions

A modern React application demonstrating HTTP/Fetch API integration for network requests. Built with React 19, Vite, and using the native Fetch API for seamless network communication.

## 🎯 Project Overview

This project showcases best practices for making HTTP requests in React using the native Fetch API. It demonstrates:

- Fetching data from external APIs using `fetch()`
- Error handling and HTTP status checking
- Service-based architecture for API calls
- Integration with React hooks (`useEffect`, `useState`)
- JSON parsing and response handling

## 🏗️ Architecture

### Project Structure
```
src/
├── pages/
│   └── ToDo.jsx          # Main page component
├── components/
│   └── to-do-list.jsx    # List display component
├── services/
│   ├── http-base.js      # Base HTTP class with Fetch API
│   └── todo-service.js   # ToDo API service
├── App.jsx               # Root component
└── main.jsx              # Entry point
```

### Service Layer

The application implements a custom HTTP service layer using the Fetch API:

- **HttpBase** (`src/services/http-base.js`): Base class handling all HTTP requests
  - Configurable base URL
  - GET request implementation
  - Response validation and JSON parsing
  - Error handling

- **ToDoService** (`src/services/todo-service.js`): Extends HttpBase
  - Fetches todos from JSONPlaceholder API
  - Built on top of the base HTTP class

## 📡 HTTP/Fetch API Implementation

### Fetch API Usage

The project uses the native browser Fetch API for HTTP requests:

```javascript
const response = await fetch(`${baseUrl}${uri}`);

if (!response.ok) {
  throw new Error(`HTTP error: ${response.status}`);
}

const data = await response.json();
```

### Key Features

- **Promise-based**: Asynchronous request handling
- **Response status checking**: Validates HTTP response codes
- **JSON parsing**: Automatically converts response to JSON
- **Error handling**: Try-catch blocks for network failures
- **Logging**: Console logs for debugging

### Request Flow

1. Component calls service method (e.g., `ToDoService.GetToDo()`)
2. Service initializes with base URL
3. Fetch API makes HTTP request
4. Response is validated (status check)
5. JSON data is parsed and returned
6. Component updates state with received data

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🔍 Linting

Run Oxlint to check code quality:

```bash
npm run lint
```

## 📦 Dependencies

- **React** (^19.2.8): UI library
- **React DOM** (^19.2.8): DOM rendering

### Dev Dependencies

- **Vite** (^8.2.2): Build tool and dev server
- **@vitejs/plugin-react** (^6.1.0): React plugin for Vite
- **Oxlint** (^1.79.0): JavaScript linter

## 🔗 External APIs

This project demonstrates API integration using:

- **JSONPlaceholder** (`https://jsonplaceholder.typicode.com`): Free fake REST API for testing
  - `/todos` endpoint: Returns a list of sample to-do items

## 💡 Usage Example

### Fetching Data

```javascript
// In your component
useEffect(() => {
  const getToDos = async () => {
    const todos = await ToDoService.GetToDo();
    setToDo(todos);
  };
  getToDos();
}, []);
```

### Creating a New Service

```javascript
import { HttpBase } from "./http-base";

export class MyService extends HttpBase {
  static async GetData() {
    this.initialize({ baseUrl: 'https://api.example.com' });
    return await this.get('/endpoint');
  }
}
```

## ⚠️ Error Handling

The Fetch API implementation includes error handling for:

- Network failures
- HTTP error status codes (4xx, 5xx)
- JSON parsing errors

Errors are logged to the console and re-thrown for component-level handling.

## 🎨 Build Tools

This template uses:

- **Vite**: Lightning-fast build tool with HMR
- **Oxc**: High-performance JavaScript linter
- **@vitejs/plugin-react**: React support with Fast Refresh

## 📝 Notes

- The React Compiler is not enabled by default due to performance impact
- For production applications, consider using TypeScript with type-aware lint rules

## 🔗 Resources

- [MDN Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com)
