import * as path from 'path';
import * as websocket from 'websocket';
import * as express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('build/client'));
app.get('/', function(req, res) {
    res.sendFile('/index.html', { root: "build/client" });
});
app.listen(port, () => console.log(`Listening on port ${port}`));