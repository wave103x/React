import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3001;

async function newServer() {
  const app = express();
  const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
  app.use(vite.middlewares);

  app.use('/', async (req, res) => {
    const url = req.originalUrl;

    let template = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');
    template = await vite.transformIndexHtml(url, template);

    const [part0, part1] = template.split('<!--one-->');
    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

    res.write(part0);
    const { stream } = await render(url, {
      onShellReady() {
        stream.pipe(res);
      },
      onAllReady() {
        res.write(part1);
        res.end();
      },
    });
  });
  app.listen(PORT);
}

newServer();
