import Express from "express";
import path from 'path';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, '../frontend', 'dist');

const app = Express();
const port = 3051;

app.use(Express.static(distPath));
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port);

