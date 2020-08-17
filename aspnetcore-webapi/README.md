why not only use docker and prod env?\
because im not able to setup `dotnet watch run` and debugger with docker.\
maybe because rebuilding binaries requires to stop/build/start of the debugger

## Local environment
i.e using local runtime/sdk, not using production docker container environment. Easy to debug and can use watch/reload.

### Run from terminal
```sh
dotnet watch -p src run

# or inside /src
dotnet watch run
```

### Run vscode debugger
Choose `.NET Core Launch (web)` or (F5) in vscode debug menu.\
Then use reload-button or shift+cmd+f5 to rebuild+reload

## Production environment
i.e will run Dockerfile with aspnet runtime 3.1 **alpine (linux)**

### Run vscode debugger with docker container 
Choose `Docker .NET Core Launch` in vscode debug menu

### Run in docker container
```sh
cd src
docker build -t mittlager-api . --no-cache
docker run --rm -p 8080:8080 mittlager-api
```
- to(local machine):from(container port)
- make sure port 80 is exposed in Dockerfile
- if trouble: mess with webBuilder.UseUrls("http://+:5000") in Program.cs