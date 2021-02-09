# Rick and Morty application

## Technologies used:

Apart from the technologies required we're using:

- MongoDB (Mongoose)
- Docker / Docker compose
- Nodemon
- Axios
- Styled components
- Mocha / Chai / Jest

## Installing

A step by step series of examples that tell you how to get a development env running

first at all we need to clone the code

```
git clone https://github.com/davepadrino/rickandmortyHaufe.git
```

You can run the code via docker like:

```
docker-compose build
docker-compose up -d
```

Or manually you'll need to have Node installed locally.

```
yarn
cd api && yarn
cd ..
cd client && yarn
cd ..
yarn start
```

After this you can run localhost:3000 for client and localhost:9000 for api.

## Directory structure

```
| api/
|-- controllers/
|-- db/
|-- middlewares/
|-- models/
|-- test/
|-- dockerfile
|-- server.js
|-- test
| client/
|-- public/
|-- src/
|---- components/
|------ Isolated components
|---- redux/
|------ actions/
|------ reducers/
|------ store.js
|---- sections/
|------ Container components
|---- services/
|---- App
|---- constants
```
