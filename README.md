# ASMA STRAPI API
Strapi backend for deploying websites using a React template.
## Setting up Database
The `./config/database.js` file is used to define database connections that will be used to store the application content. **Uncomment** the required Database Config from the file and proceed to installation
**Available Configs**
- sqlite
- MySQL
    - Update `DATABASE_HOST, DATABASE_PORT, DATABASE_NAME, DATABASE_USERNAME  DATABASE_PASSWORD` in `.env` file   
- Postgres
    - Update `DATABASE_URL` in `.env` file

## Installation and Development Guidelines
### Preparing the installation
The CLI installation guide requires at least two software prerequisites to be already installed on your computer:

`Node.js`: only LTS versions are supported **(v12 and v14)**. Other versions of Node.js may not be compatible with the latest release of Strapi. The **14.x version** is most recommended by Strapi.
`npm` (v6 only) or `yarn` to run the CLI installation scripts.
```
yarn install
# or
npm install
```
### `develop`
```
npm run develop
# or
yarn develop
```

### `start`

```
npm run start
# or
yarn start
```

### `build`

```
npm run build
# or
yarn build
```

## Deployment
### `Docker Deployment`
#### Build Image
      docker-compose build


#### Run the app

    docker-compose up -d

The app runs on  port `1337`, with  Database credentials in the `.env file`.
Lookup `docker-compose.yaml` & `Dockerfile` file to change docker configuration.
### `Heroku Deployment`
#### Setup
Setup the Repository using  [Heroku Official Deployment Guideines](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/heroku.html#_6-install-the-pg-node-module)

    git push heroku main


#### Other Deployment Options
Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).
