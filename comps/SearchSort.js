import Component from '../Component.js';

class SearchSort extends Component {
    renderHTML() {
        return `
        <form class="param">
            <input type="text" name="search" id="search-bar" placeholder="Search by Name">
            <select id="sort-drop" name="type">
                <option name="type" value="">All Types</option>
                <option name="type" value="bug">Bug Type</option>
                <option name="type" value="dark">Dark Type</option>
                <option name="type" value="dragon">Dragon Type</option>
                <option name="type" value="electric">Electric Type</option>
                <option name="type" value="fairy">Fairy Type</option>
                <option name="type" value="fighting">Fighting Type</option>
                <option name="type" value="fire">Fire Type</option>
                <option name="type" value="flying">Flying Type</option>
                <option name="type" value="ghost">Ghost Type</option>
                <option name="type" value="grass">Grass Type</option>
                <option name="type" value="ground">Ground Type</option>
                <option name="type" value="ice">Ice Type</option>
                <option name="type" value="normal">Normal Type</option>
                <option name="type" value="poison">Poison Type</option>
                <option name="type" value="psychic">Psychic Type</option>
                <option name="type" value="rock">Rock Type</option>
                <option name="type" value="steel">Steel Type</option>
                <option name="type" value="water">Water Type</option>
            </select>
            <button id="search-button">Search</button>
        </form>
        `;
    }

    onRender(form) {
        const searchInput = form.querySelector('input[name=search]');
        const typeSelect = form.querySelector('option');

        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            searchInput.value = searchParams.get('pokemon') || '';

            const type = searchParams.get('type_1');
            if (type) {
                typeSelect.forEach(select => {
                    select.checked = select.value === type;
                });
            }
        }

        updateControls();

        window.addEventListener('hashchange', () => {
            updateControls();
        });

        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);

            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            searchParams.set('pokemon', formData.get('search'));
            searchParams.set('type_1', formData.get('type'));

            searchParams.set('page', 1);

            window.location.hash = searchParams.toString();
        });
    }
}

export default SearchSort;