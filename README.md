# Angular-NodeJs-MongoDB-Application

## Execute Forntend
  ng serve --open

## Prerequisite 
1.nodeJs <br/>
2.node server with bellow REST API
  1. GET /issues
  2. GET /issues/:id
  3. POST /issues/add
  4. POST /issues/update/:id
  5. GET /issues/delete/:id <br/>
3.mongodb database mongodb://localhost:27017/issues

## Execute Backend (NodeJs in Javascript)
npm run dev

## Execute Backend (NodeJs in TypeScript)
tsc src\index.ts
npm run dev 

Node: install all @types mentioned in package.json

## Prerequisite 
1.nodeJs<br/>
2.mongoDB on localhost:27017 with issues collection

## Browse
http://localhost:4200/list


use crome extension => Allow CORS: Access-Control-Allow-Origin
