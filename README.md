# Propellerhead Technical Test

This is my submission for the propellerhead technical test.

## Installation & Setup

**Note:** These installation steps assume you have a MacOS machine.

The prerequisites for this application is to have the following installed:

- Postgres
    - To install run `brew install postgresql`
    - To start run `brew services start postgresql`
    - Once that's complete, you should be able to run `createdb phtt` (This is the database this application uses)
- NodeJS
- NPM

Once you have everything installed, you can setup the application by doing the following:

- Create the postgres database by running `createdb phtt`
- Provision the database and fill it with dummy data by running `npm run db:setup`

And you should be good to go!

To start the application, you will need to run two processes:

- The API Service by running `npm run start:api`
- The App by running `npm run start:app`

## Project Structure

This project contains both the client-side and server-side code. The client side code can be found in `/assets`, and the server side code can be found in `/src`.

## The Short Version

The server side code is spun up from `./index.js` which spins up an express server, and loads the GraphQL Schema from `/src/schema.js` which is exposed via the http://localhost:3001/graphql (**Note:** While the server is running, you can check out the GraphQL API interface via http://localhost:3001/graphiql). From there we can fire up the ReactJS app location in the `/assets` directory via webpack.
