
# My Blog

A blogging website build using ReactJs as a frontend and Appwrite as a backend service.

### [My Blog](https://myblogpa.netlify.app/)
## Features

- User authentication with appwrite
- Integrated text editor
- User friendly
- Cross platform


## Screenshots

![App Screenshot](/src/assets/Screenshot%20(139).png)
![App Screenshot](/src/assets/Screenshot%20(140).png)
![App Screenshot](/src/assets/Screenshot%20(141).png)

![App Screenshot](/src/assets/Screenshot%20(143).png)
![App Screenshot](/src/assets/Screenshot%20(144).png)


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd myblog
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_APPWRITE_URL=""`

`VITE_APPWRITE_PROJECT_ID=""`

`VITE_APPWRITE_DATABASE_ID=""`

`VITE_APPWRITE_COLLECTION_ID=""`

`VITE_APPWRITE_BUCKET_ID=""`

`VITE_EDITOR_API=""`

```bash
  npm run dev
```

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
