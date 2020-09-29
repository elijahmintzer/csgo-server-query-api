# csgo-server-query-api

This is a simple NodeJS Express server to query stats from CS:GO Servers (amount of players, what map the server is on, etc.)

# How to use on hosted server:

Goto https://csgo-server-query-api.herokuapp.com/SERVERIP/SERVERPORT

Replace 'SERVERIP' with your server IP & Port. (example: https://csgo-server-query-api.herokuapp.com/104.153.105.179/27015

# How to install on your own server:

- Install Dependencies

- Rename '.env-sample' to '.env'

- Configure the port in '.env'

- Start it with 'node .' in console

- View the response at 'localhost:port/SERVERIP/SERVERPORT' (example: localhost:1337/104.153.105.179/27015)

# Dependencies: 

- NodeJS
