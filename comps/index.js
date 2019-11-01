import HomeApp from './ExploreApp.js';

const app = new HomeApp();
const dom = app.renderDOM();
document.body.prepend(dom);