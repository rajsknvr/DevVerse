#!/bin/bash
# USAGE: gen.sh SERVICE_NAME(s)
# SERVICE_NAME(s): names of the services (like 'user', 'product', etc.)
# It will generate code for <service_name>/<service_name>.proto under <service_name>/proto/

argc=$#
argv=("$@")

for (( j = 0; j < argc; ++j )); do
  service_name=${argv[j]}


  if [ ! -f "./protos/${service_name}.proto" ]; then
    echo "Proto file for service ${service_name} does not exist in ./protos/"
    exit 1
  fi

  # Delete the proto directory if it already exists and recreate it
  if [ -d "./${service_name}/proto" ]; then
    echo "Deleting existing directory: ./${service_name}/proto/"
    rm -rf ./${service_name}/proto
  fi
  echo "Creating directory: ./${service_name}/proto/"
  mkdir -p ./${service_name}/proto/

  echo "Generating code for service: ${service_name}"
  ./node_modules/.bin/grpc_tools_node_protoc -I ./protos/ \
    --js_out=import_style=commonjs:./${service_name}/proto/ \
    --grpc_out=grpc_js:./${service_name}/proto/ \
    ./protos/${service_name}.proto;


  # ./node_modules/.bin/grpc_tools_node_protoc -I ./protos/ \
  #   --js_out=import_style=commonjs:./${service_name}/proto/ \
  #   $(find ./protos/ -type f -name "*.proto" -not -path "./protos/${service_name}.proto")
done
