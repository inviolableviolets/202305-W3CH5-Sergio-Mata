export class ApiPokemon {
  url: string;
  constructor() {
    this.url = 'https://pokeapi.co/api/v2/pokemon/';
  }

  async getAll() {
    const response = await fetch(this.url);
    const result = await response.json();
    return result.results;
  }
}
