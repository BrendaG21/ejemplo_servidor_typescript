const cors = require ('cors')
//import cors from 'cors';

const corsOption={
    origin: 'http://localhost:3000',
    optionSucessStatus:200
}
module.exports = cors(corsOption);