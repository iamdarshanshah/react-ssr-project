# SpaceX Launch App (A FrontEnd application with partial SSR)

## Deployed on heroku

- **URL** - `https://app-spacex-launch.herokuapp.com/`
- **App Screenshots** - `app-screenshots` folder in repository.

## How to Run in local

### Containerized environment (Pre-req -> **docker and docker-compose** should be installed in system)

- Clone the repository
- Run the following command

```js
docker-compose -f docker-compose-dev up --build
```

- open `localhost:8000` in browser

### In local env (Pre-req -> **node and npm** to be installed in system)

- Clone the repository.
- Run the command (install dependencies)

```js
npm install
```

- Run the command (serve the application)

```js
npm run serve
```

- open `localhost:8000` in browser

- **Perform Lint Checks** - `npm run lint`

## Configured for CI

- Gitlab CI `(.gitlab-ci.yml)`
- Github Workflows

## Tech Stack Used

- ReactJS (Front end development library)
- Node and Express (Server for performing server side rendering)
- Material-UI (Styling and component design framework)
- Docker and Docker-Compose (For containerization and deployment)
- Gitlab CI and GIthub Workflows (For creating a CI pipeline for automation and quality checks)
- NPM (Package Manager)
- Heroku (deployment platform)
- Ubuntu Platform for development
- Git

## Approach

- First step was to identify what are the components of the views (parent, childs, siblings) and create a component design and hierarchy.
- Create a service layer (api calls to fetch data) in order to implement facade design pattern and reusability of service code if in future new components might be requiring it.
- Create appropriate folder structure and modules for implementing the view based on the components identified.
- Identify workflows and functionality for which components would be responsible.
- Setting up environment for development (Code editor, dependencies to enforce best practices while coding)
- Coding for components and expected functionalities (along with proper lint checks).
- Figure out how partial ssr can be implemented.
- Implement partial ssr.
- Implement containerization of application and deployment in a containerized environment.
- Implementing CI/CD for automating integration and deployment of application.
- Deploying on heroku

**NOTE** - Used public apis for powering application with data
