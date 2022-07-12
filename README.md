# Eslint Prettier Node Typescript Jest starter

Kick off your project with this Eslint Prettier Node Typescript Jest starter.

You can use this template to build a new project or to practice Katas.

This template includes:

* ESLint
* Prettier
* Node
* TypeScript
* Jest


## Table of Contents

1. [Initialization](#Initialize-project)
2. [Installation and Usage](#installation-and-usage)
  * [Typescript Install](#typescript-install)
  * [ESLint Install](#eslint-install)
  * [Pretier Install](#prettier-install)
2. [Configuration](#configuration)
  * [Prettier Config](#prettier-config)
  * [ESLint Config](#eslint-config)
  * [TypeScript Config](#typescript-config)
  * [Testing Project Configurations](#testing-project-configurations)
3. [Installation and config additional](#installation-and-config)
  * [Nodemon install and config](#nodemon-install-and-config)
  * [Dotenv-safe install and config](#dotenv-safe-install-and-config)
  * [Jest install and config](#jest-install-and-config)
  * [EditorConfig](#editorconfig)
4. [Exclude tests from the build](#exclude-tests-from-build)

<br/>

## <a name="initialize-project"></a>Initialize Project

Avoid certain files and folders with .gitignore:

```bash
dist
node_modules
coverage
.env
```

Now we can start !

```bash
npm init -y
```

We use the `-y` flag to skip all questions.

## <a name="installation-and-usage"></a>Installation and Usage

To link our project with our version of node.

```bash
node -v > .node-version
```

### <a name="typescript-install"></a>Typescript Install

```bash
npm i -D typescript ts-node @types/node
```

```bash
npx tsc --init
```

### <a name="eslint-install"></a>ESLint Install

First install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension.

```bash
npm i -D eslint
```

```bash
npx eslint --init
```

Answer the question according to your preferences.

Create a eslintigonre file for ignore file and folder we don't need tp be linted.

```bash
touch .eslintignore
```

### <a name="prettier-install"></a>Prettier Install

Prettier allows us to reformat the code.

In first install [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension.

Install Prettier

```bash
npm i -D prettier
```

## <a name="configuration"></a>Configuration

### <a name="prettier-config"></a>Prettier Config

Create the prettier file .prettierrc

write this properties 

```js
{
  "tabWidth": 2, // space from the start of the line
  "printWidth": 120, //how much caractere by line
  "singleQuote": true, // change double quote to single quote
  "trailingComma": "es5", // 
  "arrowParens": "avoid",
  "semi": true
}
```
### <a name="eslint-config"></a>ESLint Config

Now we can configure eslint 

first install the plugins for prettier.

`npm i -D eslint-plugin-prettier eslint-config-prettier`

now extend dependecies required in the .eslintrc file

```javascript
{
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ]
}
```

and add the plugin we need

```javascript
{
  plugins: ['@typescript-eslint', 'prettier', 'import']
}
```

Add the rule

```javascript
rules: {
  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto',
    },
  ],
  'import/extensions': 'off',
  'no-console': 'off',
},
```

Add the additional import for typescript

```bash
npm i -D eslint-import-resolver-typescript tsconfig-paths
```

refactor the .eslintrc file with previous rules and new rules.

```javascript
{
  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
};
```

### <a name="typescript-config"></a>TypeScript Config

Configure the tsconfig.json with this properties:

```js
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */
    /* Basic Options */
    "target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
    "module": "commonjs", /* Specify what module code is generated. */
    "lib": ["esnext", "dom"],                /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    "allowJs": true,                         /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */
    "outDir": "./dist",                      /* Specify an output folder for all emitted files. */
    "rootDir": "./",                         /* Specify the root folder within your source files. */
    "removeComments": true,                  /* Disable emitting comments. */
    
    /* Strict Type Checking Options */
    "strict": true                           /* Enable all strict type-checking options. */,
    "noImplicitAny": true,                   /* Enable error reporting for expressions and declarations with an implied 'any' type. */
    
    /* Modules Resolution Options */
    "moduleResolution": "node",              /* Specify how TypeScript looks up a file from a given module specifier. */
    "baseUrl": "./",                         /* Specify the base directory to resolve non-relative module names. */
    "paths": {
      "@src/*": ["src/*"]
      },                                     /* Specify a set of entries that re-map imports to additional lookup locations. */
      "esModuleInterop": true                /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,
      
    /* Experimental Options */
    "experimentalDecorators": true,          /* Enable experimental support for TC39 stage 2 draft decorators. */
    "emitDecoratorMetadata": true,           /* Emit design-type metadata for decorated declarations in source files. */
    
    /* Advanced Options */
    "skipLibCheck": true,                     /* Skip type checking all .d.ts files. */
    "forceConsistentCasingInFileNames": true  /* Ensure that casing is correct in imports. */
  },
  "exclude": ["node_modules", "dist", "coverage"],
  "include": ["src"]
}
```

### <a name="testing-project-configurations"></a>Testing Project Configurations

Reload the vscode window so that eslint updates the new rules. Enter the command *ctrl shift p* on vscode.

After that create the *src* folder.

create a file index.ts in to the *src* for test the Prettier formatage

create a folder in *src* with name math, and add a file *add.ts*

afterwards test the import export with a the add.ts and the index.ts

Note: After that you can delete the file and folder in src. We created it to see if everything works well.

Add the script for the package.json

the *start:dev* script will run the code from the ts file and *start:prod' will run the js code after transpilling.

```js
"scripts": {
  "start:dev": "ts-node -r tsconfig-paths/register ./src/index.ts",
  "start:prod": "node -r ts-node/register/transpile-only -r tsconfig-paths/register ./dist/src/index.js",
  "build": tsc
}
```

run the script `npm run start:dev` for see its all ok if we have the result of the addition.

run the script `npm run build` for transpile typescript file to javascript.


## <a name="installation-and-config"></a>Installation and config additional

### <a name="nodemon-install-and-config"></a>Nodemon install and config

Install nodemon for automatic rerun of our code to see the change without running the same script multiple times.

```bash
npm i -D nodemon
```

create a *nodemon.json* file for config specific rules.

```json
{
  "watch": ["src"],
  "ext": "ts,js,json",
  "ignore": ["node_modules", "coverage", "dist"],
  "exec": "ts-node -r tsconfig-paths/register ./src/index.ts",
  "restartable": "rs",
  "env": {
    "NODE_ENV": "development"
  }
}
```

We can refactor the script *start:dev* and simply make nodemon in value, because we config this rules and more.

### <a name="Dotenv-safe-install-and-config"></a>Dotenv-safe install and config

Install dotenv-safe for our environment variables, these dependencies can go in prod, that's why we install it in dependencies and not in devDependencies.

`npm i dotenv-safe`

Create 2 files *.env* and ".env.example"
the first contains our environment variable and the second the variable without our information, but just an example of the values ​​we expect to receive.

After that import and configure dotenv.

```javascript
import dotenv from 'dotenv-safe';

dotenv.config();

console.log(process.env.MY_NAME);
```

### <a name="Jest-install-and-config"></a>Jest install and config

Install Jest with this command.

`npm i -D jest ts-jest @types/jest`

So with jest we install its library and ts-jest is the runtime for jest and @types/jest are the type definitions for jest.

ensuite create the file of configuration with command. 

`npx ts-jest config:init`

In the file.

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.(jd,ts)'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
  },
  moduleDirectories: ['node_modules', 'src'],
};
```
Now go back on *.eslintrc* and extend Jest.

```javascript
{
  env: {
    jest: true,
  },
};
```

Restart the vscode window to load the new configuration.

Now we can see that everything is ok, create a folder *__tests__* and as file add.test.ts.

Add the script for run jest.

```json
{
  "scripts": {
    "test": "jest",
    "test-watch": "jest --watchAll --verbose",
    "test:coverage": "jest --coverage"
  },
}
```

Then run the build command.

### <a name="editorconfig"></a>EditorConfig

EditorCofing allows us to have the same setting no matter which IDE we use and adds a bit more subtlety than Prettier.

So create a file .editorconfig and add this rules.

```js
[*]
end_of_line = lf
indent_size = 2
indent_style = space
trim_trailing_whitespace = true
insert_final_newline = true

[Makefile]
indent_style = tab
indent_size = 4
```

A last thing !

## <a name="exclude-tests-from-build"></a>Exclude tests from build

Create file *tsconfig.prod.json*

Configure rules.

```json
{
  "extends": "./tsconfig",
  "exclude": ["src/__tests__", "**/*.test.ts", "**/*.mock.ts"]
}
```

Add the flag "-p tsconfig.prod.json" to the build script 

Now we run the build script and in the transpile file we can only have the file needed for the programs

We have henceforth a starter with reliability and consistent !
