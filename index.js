const { GraphQLServer } = require('graphql-yoga');

const todos = [
 { id: '1', text: 'Go shopping at Versace' },
 { id: '2', text: 'Travel Japan' },
 { id: '3', text: 'Go vacation at Maldive' },
];

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

const resolvers = {
    Query: {
        getTaskList: () => todos
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
            todos.splice(todos.indexOf(args.id), 1);

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
