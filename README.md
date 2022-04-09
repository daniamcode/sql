# sql
Practice PostgreSQL &amp; Nodejs REST API, Sequelize, Babel, following https://www.youtube.com/watch?v=sA3t4d1v7OI

## Configuration
1.create package.json
2.npm i express pg pg-hstore sequelize morgan @babel/polyfill
3.npm i -D @babel/core @babel/cli @babel/preset-env
4.add .babelrc and .gitignore (for node_modules)
5.create src/index.js with some new js code (we are going to check if babel translates modern js into standard)
6.in package.json add scripts:
    "build": "babel src --out-dir dist"
    "start": "node dist/index.js"
7.execute in terminal:
    npm run build
    npm start
8.the previous was for serving in production. Now we are going to serve in dev:
9.npm i -D nodemon @babel/node (we're not going to buid, but we still need to translate new js code with babel)
10.in package.json add script:
    "dev": "nodemon src/index.js --exec babel-node" (by default nodemon executes node but we want to pass it first to babel)
11.execute in terminal:
    npm run dev
and we have our project running

Now let's start with the project.

## Project
1.create a server (view src/app.js)
2.add routes (see src/routes)

