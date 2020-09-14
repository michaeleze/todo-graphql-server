const { GraphQLServer } = require('graphql-yoga');

const todos = [
 { id: '1', text: 'Go shopping at Versace' },
 { id: '2', text: 'Travel Japan' },
 { id: '3', text: 'Go vacation at Maldive' },
];

const typeDefs = `
type Query {
  todos: [Todo]!
}

type Mutation {
  addTask(id: ID!, text: String!): [Todo]!,
  updateTask(id: String!, text: String!): [Todo]!,
  deleteTask(id: String!): [Todo]!
}

type Todo { 
    id: ID!,
    text: String!,
}
`

const resolvers = {
    Query: {
        todos: () => todos
    },
    Mutation: {
        addTask: (parent, args) => { 
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
        updateTask: (parent, args) => {        
            if (!args || !args.id || !args.text) {
                alert('Invalid task format');
                return;
            }

            todos[args.id].text = args.text;

            return todos;
        },
        deleteTask: (parent, args) => {
            todos.slice(todos.indexOf(args.id), 0);

            return todos;
        }
    }
};

const serverOptions = {
    port: process.env.PORT || 4000,
};

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(serverOptions).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});