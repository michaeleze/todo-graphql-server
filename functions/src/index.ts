import * as functions from 'firebase-functions';

const express = require('express');
const cors = require('cors');
const {graphqlHTTP} = require('express-graphql');
const {buildSchema} = require('graphql');
const {URLSearchParams} = require('url');

const typeDefs = `
type Query {
  getTaskList: [Todo]!
}

type Mutation {
  addTask(id: ID!, text: String!): [Todo]!,
  updateTask(id: ID!, text: String!): [Todo]!,
  deleteTask(id: ID!): [Todo]!
}

type Todo { 
    id: ID!,
    text: String!,
}
`

const todos = [
  {id: '1', text: 'Go shopping at Versace'},
  {id: '2', text: 'Travel Japan'},
  {id: '3', text: 'Go vacation at Maldive'},
];

const app = express();
app.use(cors());
const schema = buildSchema(typeDefs);
(global as any).URLSearchParams = URLSearchParams;

// Query and Mutation logic
const resolvers = {
  getTaskList: () => todos,
  addTask: ({id, text}: { id: string, text: string }) => {
    const task = todos.find(item => item.id === id);

    if (!task) {
      const newTask = { id: id, text: text };

      todos.push(newTask);
    }
    else {
      throw Error('Conflict. Task already defined');
    }

    return todos;
  },
  updateTask: ({id, text}: { id: string, text: string }) => {
    if (!id || !text) {
      console.log('Invalid task format');
    }
    ;

    const task = todos.find(item => item.id === id);
    (task as any).text = text;

    return todos;
  },
  deleteTask: ({id}: { id: string }) => {
    if (!id) {
      console.log('Unknown ID');
    }
    ;

    const task = todos.find(item => item.id === id);
    const index = todos.indexOf(task as any);
    todos.splice(index, 1);

    return todos;

    // for(const item of todos) {
    //   if (item.id === args.id) {
    //     const index = todos.indexOf(item);
    //     delete todos[index]
    //   }
    // }
  }
};

// Server config
app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));

exports.graphqlApp = functions.https.onRequest(app);
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
