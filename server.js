const express = require('express');
const app = express();
const cors = require('cors');
const Gamedig = require('gamedig');
const { response } = require('express');
require('dotenv-flow').config();

const port = process.env.PORT || 1337;
app.use(express.json());

async function getServerStatus(server, serverport){
  try {
    return await Gamedig.query({type: 'csgo', host: server, port: serverport})
  } catch (err){
  }
}

app.get('/:server/:port', cors(), async (request, response) => {
  try {
    const server = request.params.server;
    const serverport = request.params.port;
    const status = await getServerStatus(server, serverport);
    response.json(status);
  } catch(err) {
  }
})

app.listen(port, () => console.log(`listening on port ${port}`));