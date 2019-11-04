import Component from '../Component.js';

class Header extends Component{
    renderHTML(){
        return `
            <section class="header">
                <header>
                    <img src="./assets/pokeball.jpg" id="logo">
                    <h1 id="pokedex-name">Pokedex by Oak</h1>
                </header>

                <nav>
                    <a href="./index.html">Home</a>
                    <a href="./pokedex.html">Pokedex</a>
                </nav>
            </section>
        `;
    }
}

export default Header;