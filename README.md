# REST API -> Express Typescript Jest with Sequelize + MySQL and Husky

I use for this project :

* Express
* TypeScript
* Jest
* Sequelize
* MySQL (MariaDB)


First thing, install ESLint Prettier Node Typescript Jest starter + node_modules with the dependencies, we will config in the starter.

```bash
gh repo clone DavidRelut/Eslint-Prettier-Node-Typescript-Jest-starter

npm install || npm install -g node-modules
npm audit fix --force
```

# 📝 Table of Contents
1. [Installation & Usage](#installation-and-usage)
2. [Project structure](#project-structure)
    * [Configure Environment variables](#configure-environnemnt-variables)
    * [Organize with MVC](#organize-with-mvc)
    * [Entry Point + Server connection](#main-endpoint-and-server-connection)
3. [Connect Sequelize MariaDB with REST API](#connect-sequelize-mariadb-with-rest-api)
    * [Controllers](#conntrollers)
    * [Routes](routes)
    * [Install Sequelize with Typecript](#install-sequelize-with-typescript)
    * [Models with Sequelize](#models-with-sequelize)
    * [Connection Database with Sequelize](#connection-database-with-sequelize)
4. [Testing with Jest](#testing-with-jest)

<br/>


## <a name="installation-and-usage"></a>Installation & Usage

Install Express and these definition types.
These dependencies with *dotenv* will go into production.

```bash
npm i express --save
npm i -D @types/express
```

## <a name="project-structure"></a>Project structure
### <a name="configure-environnemnt-variables"></a>Configure Environment variables

Create a *.env* file.
Your *.env* file should look like this with the values ​​from your database.

```js
PORT=
DB_HOST=
DB_NAME=
DB_PORT=
DB_USER=
DB_PASSWORD=
```

Now we may begin to configure our router.

### <a name="organize-with-mvc"></a>Organize with MVC

Organize our source code with the MVC design pattern without use the view for this project.

We split the responsability, in the source folder add these folders -> *controllers*, *db*, *models*, *routes*
 * *controllers* folder for 
 * *db* folder for the Database connection.
 * *models* folder for cherhcer les données dans la DB
 * *routes* folder for traiter l'appel à la bdd est donc au model est les requete de l'user et renver la route demmander avec les données. (aussi appeller controllers).

### <a name="entry-point-and-server-connection"></a>Entry Point + Server connection

Create a *app.ts* file and src folder.

First import dotenv and express to use their methods, then configure dotenv to use the previously defined environment variables.

```typescript
import dotenv from 'dotenv-safe';
import express, { Application, Request, Response, json, urlencoded } from 'express';

dotenv.config();
const app: Application = express();
```

Secondly use the middleware for parse the data in json.
`express.json()` replaces `bodyParser.json()`. It allows to read the body of the requests and to parse them.

```typescript
app.use(json())
app.use(urlencoded({ extended: true }));
```

Thirdly, use the express method for creating our entry point and the server connection.

```typescript
app.get('/', (req: Request, res: Response) => {
  res.send('Hello TS');
});

app.listen(process.env.PORT, () => {
  console.log(`Server Express with Typescript is running on port ${process.env.PORT}`)
})
```

## <a name="connect-sequelize-mariadb-with-rest-api"></a>Connect Sequelize MariaDB with REST API
### <a name="controllers"></a>Controllers

### <a name="routes"></a>Routes

### <a name="install-sequelize-with-typescript"></a>Install Sequelize with Typescript

Install required package sequelize and the driver of your choice here it will be mariadb.

```bash
npm i sequelize sequelize-typescript mariadb --save
npm i -D @types/sequelize
```

### <a name="models-with-sequelize"></a>Models with Sequelize

We import sequelize-typescript to use types with sequelize for models.

```typescript
import { Table, Model, Column, DataType } from "sequelize-typescript";
```

### <a name="connection-database-with-sequelize"></a>Connection Database with Sequelize

```typescript
import { Sequelize } from "sequelize-typescript";
```

## <a name="testing-with-jest"></a>Testing with Jest
