# Tweetulator FE - ReactJS

- I use create-react-app with typescript template to provision the application.
- I use TailwindCSS to build the UI for the whole app, React Router V6 to handle navigate in app
- I only use React Context and React Hook to share state across components instead of Redux
- The project structure is described as below

## How to run on local development
Create .env and copy the content from .env.example
```
yarn install
yarn start
```
Visit http://localhost:3000

### React Architecture
```
src
│
└───api: contains the axios instance for making the requests.
│
└───components: Contains all components
│   │   Header.tsx
│   │   Footer.tsx
│      ...
│   
└───contexts: Contains all React contexts, currently I just added AuthContext for this project
│
│
│
└─── hooks: Contains all React custom hooks: useAuth and useItem
│
│
│
└─── layout: App layout, I have added default layout with basic Header and Footer
│
│
│
└─── pages: I use this folder to group App's pages together
│
│
│
└─── routes.tsx: All pages route will locate in this file.
```
