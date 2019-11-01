import Component from '../Component.js';
import Header from '../comps/Header.js';

class HomeApp extends Component {
    onRender(dom){
        const header = new Header();
        dom.prepend(header.renderDOM());
    }

    renderHTML(){
        return `
        <div>
            <main>  
                <a href="./pokedex.html">
                    <img src="./assets/pokedex.png" id="logo2">
                </a>
            </main>
        </div>
        `;
    }
}

export default HomeApp;