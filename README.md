# bitch-im-from-chicago

1. Set environment variables on Dockerfile
2. Build docker image

`docker build -t <user>/manila-client .`

3. Create container and run

`docker run -d -it --name=<name> -p 30000:30000 --restart=always <user>/manila-client
`
