# outage-client

1. Set environment variables on Dockerfile
2. Build docker image

`docker build -t <user>/outage-client .`

3. Create container and run

`docker run -d -it --name=<name> -p 30000:30000 --restart=always <user>/outage-client
`
