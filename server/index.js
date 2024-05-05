import express from 'express';
const serverless = require("serverless-http");
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const app = express();

const router = express.Router();
router.get("/", (_, res) => {
  res.send("hello world!")
});
app.use(`/.netlify/functions/app`, router);
module.exports = app;
module.exports.handler = serverless(app);

// const { PORT = 3000 } = process.env;

// const __dirname = dirname(fileURLToPath(import.meta.url));
// const pathName = resolve(__dirname, '../dist/index.html');

// app.use(express.static('./dist'));

// app.get('/*', (req, res) => {
//   res.sendFile(pathName);
// });

// app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
