import { Component } from './component';
import { ApiPokemon } from '../data/api.pokemon';

export class List extends Component {
  pokemons: [];
  repo: ApiPokemon;
  constructor(selector: string) {
    super(selector);
    this.pokemons = [];
    this.repo = new ApiPokemon();
    this.handleLoad();
  }

  async handleLoad() {
    this.pokemons = await this.repo.getAll();

    console.log(this.pokemons);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    const list = this.pokemons.results
      .map(
        (item: { name: string; url: string }) => `
          <li>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/${
              item.url.split('/')[6]
            }.gif"" alt="">
            <span>${item.name}</span>
          </li>`
      )
      .join('');

    return `
    <section class="tasks"></section><ul>${list}</ul>`;
  }
}
