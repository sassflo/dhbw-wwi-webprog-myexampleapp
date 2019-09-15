"use strict";
/*Main Class of Application*/

import stylesheet from "./app.css";
import MyReceipes from "./my-receipes/my-receipes.js";
import ReceipePage from "./receipe-page/receipe-page.js";

class App {
  constructor() {
    this._title = "Foodhelper";
    this._currentView = null;
  }

  start() {
    console.log("App started successfully :)");
    this.showMyReceipes();
  }

  showMyReceipes() {
    let view = new MyReceipes(this);
    this._switchVisibleView(view);
  }

  showReceipePage() {
    let view = new ReceipePage(this);
    this._switchVisibleView(view);
  }

  _switchVisibleView(view) {
    let goon = () => this._switchVisibleView(view);

    if(this._currentView && !this._currentView.onLeave(goon)) {
      return false;
    }

    document.title = `${this._title} - ${view.title}`;
    this._currentView = view;
    this._switchVisibleContent(view.onShow());
    return true;
  }

  _switchVisibleContent(content) {
    // <header> und <main> des HTML-Grundgerüsts ermitteln
    let app = document.querySelector("#app");
    let header = document.querySelector("#app > header");
    let main = document.querySelector("#app > main");

    // Zuvor angezeigte Inhalte entfernen
    // Bei der Topbar nur die untere Zeile, im Hauptbereich alles!
    app.className = "";
    header.querySelectorAll(".bottom").forEach(e => e.parentNode.removeChild(e));
    main.innerHTML = "";

    // CSS-Klasse übernehmen, um die viewspezifischen CSS-Regeln zu aktivieren
    if (content && content.className) {
        app.className = content.className;
    }

    // Neue Inhalte der Topbar einfügen
    if (content && content.topbar) {
        content.topbar.forEach(element => {
            element.classList.add("bottom");
            header.appendChild(element);
        });
    }

    // Neue Inhalte des Hauptbereichs einfügen
    if (content && content.main) {
        content.main.forEach(element => {
            main.appendChild(element);
        });
    }
}
}

export default App;
