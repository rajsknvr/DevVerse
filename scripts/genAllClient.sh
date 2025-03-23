#!/bin/bash

# USAGE: gen.sh SERVICE_NAME(s)
# SERVICE_NAME(s): names of the services (like 'user', 'product', etc.)
# It will generate code for <service_name>/<service_name>.proto under backend/src/proto/

argc=$#
argv=("$@")

for (( j = 0; j < argc; ++j )); do
  service_name=${argv[j]}

  # Check if the proto file exists for the given service name
  if [ ! -f "./protos/${service_name}.proto" ]; then
    echo "Proto file for service ${service_name} does not exist in ./protos/"
    exit 1
  fi

  # Define the target directory in backend/src/proto
  target_dir="./backend/src/proto/${service_name}"

  # Delete the existing proto directory if it exists, then recreate it
  if [ -d "$target_dir" ]; then
    echo "Deleting existing directory: $target_dir"
    rm -rf "$target_dir"
  fi
  echo "Creating directory: $target_dir"
  mkdir -p "$target_dir"

  echo "Generating code for service: ${service_name}"

  # Run grpc_tools_node_protoc with ts-protoc-gen to generate TypeScript-friendly code
  ./node_modules/.bin/grpc_tools_node_protoc \
    -I ./protos \
    --plugin=./node_modules/.bin/protoc-gen-ts \
    --js_out=import_style=commonjs,binary:$target_dir/ \
    --ts_out=service=grpc-node,mode=grpc-js:$target_dir/ \
    --grpc_out=grpc_js:$target_dir/ \
    ./protos/${service_name}.proto

done
