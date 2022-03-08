# flickrio
This is a Sanrio clone of [Flickr](https://www.flickr.com/).
<br/>
Access to the live site: [flickrio](https://helloflickrio.herokuapp.com/)

## Index
| [Feature List](https://github.com/itsjongy/flickrio/wiki/Feature-List) | [Database Scheme](https://github.com/itsjongy/flickrio/wiki/Database-Schema) |

## Technologies Used


## Getting Started
1. Clone the repo:
    - ```git clone git@github.com:itsjongy/flickrio.git``` 
2. Install dependencies in root directory:
    - ```npm install```
3. Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL:
    - ```CREATE USER <name> WITH CREATEDB PASSWORD '<password>'```
4. Create a .env file in the backend directory based off the .env.example provided.
5. Enter your username/password information into created .env file along with database name, JWT_SECRET, and PORT(recommend :5000).
6. Add proxy to the package.json in the frontend directory, matching the port number with the PORT in the .env file.
    - ```"proxy": "http://localhost:5000"```
7. Create database, migrate, and seed the models:
    - ```npx dotenv sequelize db:create```
    - ```npx dotenv sequelize db:migrate```
    - ```npx dotenv sequelize db:seed:all```
8. Start the service from the backend.
    - ```npm start```
9. Start the service from the frontend (will start from default browser or navigate to http://localhost:3000)
    - ```npm start```
10. Login using the ```demo``` user or create an account to use flickrio.
