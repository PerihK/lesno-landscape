import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, extname, sep } from 'node:path';
const root = fileURLToPath(new URL('../dist/client/', import.meta.url));
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.webp':'image/webp', '.svg':'image/svg+xml', '.json':'application/json', '.rsc':'text/x-component' };
const server = createServer(async (req,res) => {
  try {
    if (!['GET','HEAD'].includes(req.method)) {res.writeHead(405, {Allow:'GET, HEAD'}).end(); return;}
    const pathname = decodeURIComponent(new URL(req.url,'http://127.0.0.1').pathname);
    if(pathname === '/__lesno_health') {res.writeHead(200,{'Content-Type':'application/json'}).end(JSON.stringify({site:'lesno',mode:'local-static'}));return;}
    const file = resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(root.endsWith(sep) ? root : root+sep)) {res.writeHead(403).end();return;}
    const info = await stat(file);
    if (!info.isFile()) {res.writeHead(404).end();return;}
    res.writeHead(200, {'Content-Type':types[extname(file)] || 'application/octet-stream','Content-Length':info.size,'X-Content-Type-Options':'nosniff','Cache-Control':'no-cache'});
    res.end(req.method === 'HEAD' ? undefined : await readFile(file));
  } catch(error) {
    res.writeHead(error.code === 'ENOENT' ? 404 : 400,{'Content-Type':'text/plain; charset=utf-8'}).end('Страница не найдена');
  }
});
server.on('error', error => {console.error(error.message);process.exitCode=1;});
server.listen(3000,'127.0.0.1',() => console.log('Лесно: http://127.0.0.1:3000/'));
