  <h1 align="center">Accelerometer Nest app</h1>

## Description

An application that creates a REST endpoint which allows you to retrieve accelerometer data sent by the mobile 
and store it in a MongoDB database.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test with real device app
1- Running the app:
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
2- Expose the endpoint with ngrok

```bash
$ ngrok http 3000
```
3- Change the request URL with the generated one in the front end.