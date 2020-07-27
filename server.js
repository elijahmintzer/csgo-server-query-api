const express = require('express');
const app = express();
const cors = require('cors');
const Gamedig = require('gamedig');
const { response } = require('express');
require('dotenv-flow').config();

const port = process.env.PORT || 1337;
app.use(express.json());

async function getServerStatus(server){
  try {
    return await Gamedig.query({type: 'csgo', host: server})
  } catch (err){
  }
}

app.get('/:server', cors(), async (request, response) => {
  try {
    const server = request.params.server;
    const status = await getServerStatus(server);
    response.json(status);
  } catch(err) {
  }
})

app.listen(port, () => console.log(`listening on port ${port}`));