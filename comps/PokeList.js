import Component from '../Component.js';
import PokeCard from './PokeCard.js';

class PokeList extends Component {
    
    onRender(dom) {
        const poke = this.props.poke;

        poke.forEach(poke => {
            const props = { poke };
            const pokeItem = new PokeCard(props);
            const pokeDom = pokeItem.renderDOM();
            dom.appendChild(pokeDom);

        });
    }
    
    renderHTML() {
        return `
            <div class="pokebox">
            
            </div>
        `;
    }
}

export default PokeList;