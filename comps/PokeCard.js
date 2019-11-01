import Component from '../Component.js';

class PokeCard extends Component {
    renderHTML(){
        const poke = this.props.poke;

        return `
            <div class="poke-box">
                <figure>
                    <img src="${poke.url_image}" class="poke-photo">
                </figure>
                <div class="poke-desc">
                    <h2><span id="poke-name">${poke.pokemon}</span></h2>
                    <p>Attk:<span id="poke-attk">${poke.attack}</span> Def:<span id="poke-def">${poke.defense}</span></p>
                    <p>Type: <span id="poke-type">${poke.type_1}</span></p>
                    <p>Color: <span id="poke-color">${poke.color_1}</span></p>
                </div>
            </div>
        `;
    }
}

export default PokeCard;