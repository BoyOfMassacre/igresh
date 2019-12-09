const msg = require('../assets/messages')


const $i = {};

window.$i = $i;

$i.Core = class {
    constructor() {
        this._ver = '0.1.0';
        this._shc = '[ISH]';
        this._initApp();
    }

    _initApp() {
        const app = document.querySelector('#app');
        this.app = app;
        if(app) {
            this._greetings();
        } else {
            console.error(`${this._shc} ${msg.error.appExists}`)
        }
    }

    _greetings() {
        console.log(`${this._shc} ${msg.greets[0]} \n${this._shc} ${msg.greets[1]} ${this._ver}.`);
    }

    createNavbar({name, children}) {
        if(!(name && children)) return console.error(`${this._shc} ${msg.error.navbar.propsExists}`) 
        this[name] = document.createElement('nav');
        this.addChildren(children, this[name]);
        this.app.appendChild(this[name]);
    }

    addChildren(children, parent) {
        children ? null : console.error(`${this._shc} ${msg.error.addChildren.props}`)
        const childs = children;

        childs.forEach(child => {
            let name = `${child.tag || 'div'}-${toString(Math.random()*Math.pow(10, 6))}`;
            this[name] = document.createElement(child.tag || 'div');
            this[name].textContent = child.textContent;
            parent ? parent.appendChild(this[name]) : document.body.appendChild(this[name]); 
        })
    }
}

module.exports = $i;