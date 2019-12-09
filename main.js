const $i = require('./libs/Igresh');
const { remote } = require('electron')

const webContents = remote.webContents.getAllWebContents()[0]

window.addEventListener('keydown', (e) => {
    e.key === 'F12' ? webContents.openDevTools() : null;
    e.key === 'Escape' ? window.close() : null;
})

window.core = new $i.Core();

core.createNavbar({name: 'brand', children: [{
    name: 'brand',
    tag: 'h1',
    textContent: '@igresh_default_app'
}]});
