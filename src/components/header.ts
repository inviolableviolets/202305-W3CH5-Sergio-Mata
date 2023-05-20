import { Component } from './component';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<header class="header">
              <h1>Gotta Fetch'em All</h1>
              <img class="title" src="/5FBP.gif" alt="Pokemon logo" width=250 height=120>
            </header>`;
  }
}
