"use strict";

import stylesheet from "./receipe-page.css";

class ReceipePage {
  constructor(app, id) {
    this._app = app;
    this._id = id;
  }

  onShow() {
    // Anzuzeigende HTML-Elemente ermitteln
    let section = document.querySelector("#receipe-page").cloneNode(true);

    let content = {
        className: "receipe-page",
        topbar: section.querySelectorAll("header > *"),
        main: section.querySelectorAll("main > *"),
    };

    // Event Handler registrieren
    let myReceipesItem = section.querySelector("header .item.my-receipes");

    myReceipesItem.addEventListener("click", () => {
        this._app.showMyReceipes("", "new");
    })

    // Ergebnis zurückliefern
    return content;
  }

  onLeave(goon) {
    return true;
  }

  get title() {
    return "[Rezeptname]";
  }
}

export default ReceipePage;
