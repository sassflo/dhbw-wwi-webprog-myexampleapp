"use strict";

import stylesheet from "./receipe-page.css";

class ReceipePage {
  constructor(app, id, action) {
    this._app = app;
    this._id = id;
    this._action = action;
  }

  onShow() {
    // Anzuzeigende HTML-Elemente ermitteln
    let section = document.querySelector("#receipe-page").cloneNode(true);

    return {
        className: "receipe-page",
        topbar: section.querySelectorAll("header > *"),
        main: section.querySelectorAll("main > *"),
    };
  }

  onLeave(goon) {
    return true;
  }

  get title() {
    if(this._id!="")
    {
      return "Rezept Nummer " + this._id;
    }
    return "Neues Rezept";
  }
}

export default ReceipePage;
