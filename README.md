# csgo-server-query-api

This is a simple NodeJS Express server to query stats from CS:GO Servers (amount of players, what map the server is on, etc.)

# How to use on hosted server:

Goto https://csgo-server-query-api.herokuapp.com/SERVERIP

Replace 'SERVERIP' with your server IP. (example: https://csgo-server-query-api.herokuapp.com/csurf.scsgaming.com/

# How to install on your own server:

- Install Dependencies

- Rename '.env-sample' to '.env'

- Configure the port in '.env'

- Start it with 'node .' in console

- View the response at 'localhost:port/SERVERIP' (example: localhost:port/csurf.scsgaming.com)

# Dependencies: 

- GameDig - https://github.com/gamedig/node-gamedig

- ExpressJS

- Cors

- Dotenv-Flow
