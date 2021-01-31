import * as functions from 'firebase-functions';
const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { URLSearchParams } = require('url');

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
  { id: '1', text: 'Go shopping at Versace' },
  { id: '2', text: 'Travel Japan' },
  { id: '3', text: 'Go vacation at Maldive' },
];

const app = express();
app.use(cors());
const schema = buildSchema(typeDefs);
(global as any).URLSearchParams = URLSearchParams;

// Query and Mutation logic
const resolvers = {
    getTaskList: () => todos,
    addTask: (parent: any, args: any) => {
      const currentArg = todos.find(item => (
        item.id === args.id
      ));

      if (args.id === currentArg) {
        console.log('Conflict. Task already defined');
        return;
      }

      const newItem = {
        id: args.id,
        text: args.text,
      };

      todos.push(newItem);

      return todos;
    },
    updateTask: (parent: any, args: any) => {
      if (!args || !args.id) {
        console.log('Invalid task format');
      };

      const index = todos.indexOf(args.id);
      todos[index].text = args.text;

      return todos;
    },
    deleteTask: (parent: any, args: any) => {
      if (!args || !args.id) {
        console.log('Invalid task format');
      };

      for(const item of todos) {
        console.log(item)
        if (item.id === args.id) {
          console.log(item)
          const index = todos.indexOf(item);
          delete args[args.indexOf(index)]
        }
      }
      //todos.splice(index, 1);
      return todos;
    }
};

// Server config
app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));

exports.graphql = functions.https.onRequest(app);
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
