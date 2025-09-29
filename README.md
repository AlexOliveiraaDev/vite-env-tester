# React Environment Variables Test

A small React + Vite project to demonstrate how to read and display environment variables that start with `VITE_`.

## Features

* Reads environment variables defined in `.env` files.
* Filters and displays only variables starting with `VITE_`.
* Simple React UI to visualize variables.
* Built with Vite for fast development and hot module replacement.

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <project-folder>
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root:

```env
VITE_API_URL=https://example.com
VITE_APP_NAME=MyApp
```

## Running the Project

```bash
npm run dev
```

Open your browser at `http://localhost:5173` (or the port displayed in the terminal).

## Notes

* Only variables prefixed with `VITE_` are exposed to the frontend for security.
* Console logging is included for debugging purposes.

