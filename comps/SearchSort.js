import Component from '../Component.js';

class SearchSort extends Component {
    renderHTML() {
        return `
        <section class="param">
            <input type="text" id="search-bar" placeholder="Search Pokedex">
            <select id="sort-drop" name="sorting">
                <option value="">Sort by Type</option>
                <option value="water">Water Type</option>
            </select>
        </section>
        `;
    }
}

export default SearchSort;