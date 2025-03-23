const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('./proto/user.proto');
const userProto = grpc.loadPackageDefinition(packageDefinition).user;

const server = new grpc.Server();

server.addService(userProto.UserService.service, {
  GetUser: (call, callback) => {
    const userId = call.request.userId;
    callback(null, {
      userId,
      name: 'John Doe',
      email: 'john@example.com'
    });
  }
});

const PORT = 5002;
server.bindAsync(
  `0.0.0.0:${PORT}`,
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log(`🚀 User service running at http://localhost:${PORT}`);
    server.start();
  }
);
