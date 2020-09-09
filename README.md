# SpaceX Launch App (A FrontEnd application with partial SSR)

## Deployed on heroku

- **URL** - `https://app-spacex-launch.herokuapp.com/`

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

## Tech Stack Used

- ReactJS (Front end development library)
- Node and Express (Server for performing server side rendering)
- Material-UI (Styling and component design framework)
- Docker and Docker-Compose (For containerization and deployment)
- Gitlab CI (For creating a CI pipeline for automation and quality checks)
- NPM (Package Manager)

**NOTE** - Used public apis for powering application with data
