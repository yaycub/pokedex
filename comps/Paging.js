import Component from '../Component.js';

class Paging extends Component {
    renderHTML() {
        const perPage = 20; // this API only does 10 per
        const totalResults = this.props.count;
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);

        let page = 1;
        const parsedPage = parseInt(searchParams.get('page'));
        if (isNaN(parsedPage)) {
            page = 1;
        }
        else {
            page = parsedPage;
        }

        if (!totalResults) {
            return /*html*/`
                <p class="paging">No results, try another search</p>
            `;
        }

        const lastPage = Math.ceil(totalResults / perPage);

        return /*html*/`
            <p class="paging">
                <button class="prev" ${page === 1 ? 'disabled' : ''}>◀</button>
                <span>Page ${page} of ${lastPage}</span>
                <button class="next" ${page === lastPage ? 'disabled' : ''}>▶</button>
            </p>
        `;
    }

    onRender(dom) {
        const prevButton = dom.querySelector('.prev');
        const nextButton = dom.querySelector('.next');

        if (!prevButton){
            return;
        }

        let page = 1;

        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            const parsedPage = parseInt(searchParams.get('page'));
            if (isNaN(parsedPage)) {
                page = 1;
            } 
            else {
                page = parsedPage;
            }
        }

        updateControls();

        window.addEventListener('hashchange', () => {
            updateControls();
        });

        function updatePage(inc) {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);
            searchParams.set('page', page + inc);

            window.location.hash = searchParams.toString();
        }

        prevButton.addEventListener('click', () => {
            updatePage(-1);
        });

        nextButton.addEventListener('click', () => {
            updatePage(1);
        });
    }
}

export default Paging;