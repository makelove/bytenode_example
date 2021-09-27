执行
docker run -it --name bytenode -v $PWD:/app  node:latest

进入后台
docker exec -it bytenode /bin/bash