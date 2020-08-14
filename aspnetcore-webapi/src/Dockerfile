ARG VERSION=3.1-alpine3.10

FROM mcr.microsoft.com/dotnet/core/aspnet:$VERSION AS base
WORKDIR /app

# needed for vscode debugger
EXPOSE 80
EXPOSE 443

# needed because of app user permissions and kestrel
ENV ASPNETCORE_URLS=http://+:8080

FROM mcr.microsoft.com/dotnet/core/sdk:$VERSION AS build
WORKDIR /src

ADD *.csproj .
RUN dotnet restore

ADD . .
WORKDIR "/src/."
RUN dotnet build -c Release -o /app/build

FROM build AS publish
RUN dotnet publish -c Release -o /app/publish

FROM base AS final

# do not run as root user
RUN adduser \
  --disabled-password \
  --home /app \
  --gecos '' app \
  && chown -R app /app
USER app

WORKDIR /app
COPY --from=publish /app/publish .
ENV DOTNET_RUNNING_IN_CONTAINER=true

ENTRYPOINT ["dotnet", "mittlager-api.dll"]
