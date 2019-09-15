"use strict";

import stylesheet from "./my-receipes.css";

class MyReceipes {
  constructor(app) {
    this._app = app;
  }

  onShow() {
    // Anzuzeigende HTML-Elemente ermitteln
    let section = document.querySelector("#my-receipes").cloneNode(true);

    let content = {
        className: "my-receipes",
        topbar: section.querySelectorAll("header > *"),
        main: section.querySelectorAll("main > *"),
    };

    // Event Handler registrieren
    let receipePageItem = section.querySelector("header .item.receipe-page");

    receipePageItem.addEventListener("click", () => {
        this._app.showReceipePage();
    })

    // Ergebnis zurückliefern
    return content;
  }

  onLeave(goon) {
    return true;
  }

  get title() {
    return "Mein Rezepte";
  }
}

export default MyReceipes;
