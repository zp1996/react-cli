const koa = require('koa'),
    { readSmallFile } = require('lsgo-file'),
    app = new koa(),
    staticPath = `${__dirname}/dist`,
    port = 3000;

app.use(require('koa-static')(staticPath));

app.use(async ctx => {
    ctx.type = 'text/html';
    ctx.body = await readSmallFile(`${staticPath}/index.html`);
});

app.listen(port, () => {
    require('child_process').exec(`open http://localhost:${port}/`);
});
