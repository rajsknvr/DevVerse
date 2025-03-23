const fastify = require('fastify')({ logger: true });
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
var reflection = require('@grpc/reflection');
// Load gRPC proto
const packageDefinition = protoLoader.loadSync('../protos/user.proto');
const userProto = grpc.loadPackageDefinition(packageDefinition).user;

const users = [
    { id: "1", name: 'Alice',email:'hi' },
    { id: "2", name: 'Bob',email:'hi' },
    { id: "3", name: 'Raj' ,email:'hi'},
    { id: "4", name: 'Rahul',email:'hi' },
];


// ---- REST ENDPOINTS ----
fastify.get('/users/:id', async (request, reply) => {
  const userId = parseInt(request.params.id);
  const user = users.find(u => u.id === userId);
  
  if (user) {
    return reply.send(user); // Fastify uses `reply.send()` instead of `res.json()`
  } else {
    return reply.status(404).send('User not found'); // Fastify uses `reply.status(...).send(...)`
  }
});

fastify.get('/users', async (request, reply) => {
  return reply.send(users); // Send all users as an array
});

// ---- gRPC SERVICE ----
const grpcServer = new grpc.Server();

var reflection = new reflection.ReflectionService(packageDefinition);

reflection.addToServer(grpcServer);

grpcServer.addService(userProto.UserService.service, {
  GetUser: (call, callback) => {
    const userId = call.request.id;
    const user = users.find(u => u.id === userId);
    callback(null, user);
  },
  GetAllUsers: (call, callback) => {
    callback(null,{users});
  }

});


// Start REST API on port 4000
const startRestServer = async () => {
  try {
    await fastify.listen({ port: 5002 });
    console.log(`🚀 USER-SERVICE REST API running on http://localhost:5002`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

// Start gRPC Server on port 6002
const startGrpcServer = () => {
  grpcServer.bindAsync(
    '0.0.0.0:6002',
    grpc.ServerCredentials.createInsecure(),
    () => {
      console.log('🚀 USER-SERVICE gRPC Server running on http://localhost:6002');
      grpcServer.start();
    }
  );
};

// Start both servers
const startServers = async () => {
  startRestServer();
  startGrpcServer();
};

startServers();
