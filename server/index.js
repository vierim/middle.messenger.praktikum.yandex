import express from 'express';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const app = express();

const { PORT = 3000 } = process.env;

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathName = resolve(__dirname, '../dist/index.html');

app.use(express.static('./dist'));

app.get('/*', (req, res) => {
  res.sendFile(pathName);
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
