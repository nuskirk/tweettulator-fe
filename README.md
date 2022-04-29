- I use TailwindCSS to build the UI for the whole app, React Router V6 to handle navigate in app
- I only use React Context and React Hook to share state across components instead of Redux
- 
```
project
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
│
│
│
└─── hooks: Contains all React custom hooks
```
