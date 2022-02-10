# AKS Workload

AKS sample workload to reach On-Premises REST API

#### Initial Setup
```
npm i express express-handlebars axios dotenv
npm i nodemon -D
```

#### Building your image
```
docker build . -t <your username>/node-web-app

docker images
```

#### Run the image
```
docker run -p 49160:8080 -d <your username>/node-web-app

# Get container ID
docker ps

# Print app output
docker logs <container id>

# Example
Running on http://localhost:8080

docker ps
```