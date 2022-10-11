# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

1. Create your own codespace using the default settings
2. run `docker-compose up` to start up the docker containers
3. Check that the backend is working by going to https://obelusfamily-anythink-market-tkjtr-xq7p67794gxc6wjg-3000.githubpreview.dev/api/ping
4. Check that the front-end is working and connected to the back-end by going to https://obelusfamily-anythink-market-tkjtr-xq7p67794gxc6wjg-3001.githubpreview.dev/register and creating a new user
