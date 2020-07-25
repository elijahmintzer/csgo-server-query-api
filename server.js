const express = require('express');
const app = express();
const cors = require('cors');
const Gamedig = require('gamedig');
require('dotenv-flow').config();

const port = 1337 || process.env.PORT;
app.use(express.json());

async function getServerStatus(server){
  try {
    return await Gamedig.query({type: 'csgo', host: server})
  } catch (err){
    console.log(err);
  }
}

app.get('/:server', cors(), async (request, response) => {
  try {
    const server = request.params.server;
    const status = await getServerStatus(server);
    response.json(status);
  } catch(err) {
    console.log(err);
  }
})

app.listen(port, () => console.log(`listening on port ${port}`));