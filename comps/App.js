import Component from '../Component.js';
import Header from './Header.js';
import SearchSort from './SearchSort.js';
import PokeList from './PokeList.js';
import Paging from './Paging.js';
import { getPoke } from '../services/poke-api.js';

class App extends Component {
    async onRender(dom){
        const header = new Header();
        dom.prepend(header.renderDOM());

        const searchSection = dom.querySelector('.params');
        const searchSort = new SearchSort();
        searchSection.appendChild(searchSort.renderDOM());

        const pagingSection = dom.querySelector('.paging');
        const paging = new Paging();
        pagingSection.appendChild(paging.renderDOM());

        const cardSection = dom.querySelector('.display');
        const pokeList = new PokeList({ poke: [] });
        cardSection.appendChild(pokeList.renderDOM());

        const response = await getPoke();
        const poke = response.results;
        pokeList.update({ poke: poke });
    }

    renderHTML() {
        return `
        <div>
            

            <section class="params">
                
            </section>

            <section class="paging">

            </section>
            
            <section class="display">
                    
            </section>
        </div<>
        `;
    }
}

export default App;