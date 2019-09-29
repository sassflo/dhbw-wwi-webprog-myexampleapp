"use strict";

import stylesheet from "./receipe-page.css";

let _db = "";

class ReceipePage {
  constructor(app, id, action) {
    this._app = app;
    this._id = id;
    this._action = action;
    _db = this._app._db;
  }

  onShow() {
    // Anzuzeigende HTML-Elemente ermitteln
    let section = document.querySelector("#receipe-page").cloneNode(true);

    console.log("Recept loading with Action " + this._action);

    if(this._action == "display")
    {
      _db.getReceipe(this._id).then(function(doc)
      {
        console.log("Receipes loaded");
        onFinishedLoading(doc);
      });
    }

    else if(this._action == "edit")
    {
        document.getElementsByTagName("h1")[0].setAttribute("style","display:none");
        location.reload();
    }

    else if(this._action == "new")
    {
        document.getElementsByTagName("h1")[0].setAttribute("style","color:black !important");
    }



    return {
        className: "receipe-page",
        topbar: section.querySelectorAll("header > *"),
        main: section.querySelectorAll("main > *"),
    };
  }

  onLoad()
  {
    return;
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

let onFinishedLoading = (doc) => {
  let name = document.getElementsByTagName("h1")[0]
  name.textContent = doc.data().name + " / " + doc.data().author;

  console.log(document.getElementsByTagName("h1")[0].textContent);

  let table = document.getElementById("ingredients-table");
  let ingred1 = document.createElement("tr");
  let ingred2 = document.createElement("tr");
  let ingred3 = document.createElement("tr");
  let ingred4 = document.createElement("tr");

  ingred1.textContent = "Käse";
  ingred2.textContent = "Butter";
  ingred3.textContent = "Maultaschen";
  ingred4.textContent = "Ei";

  table.appendChild(ingred1);
  table.appendChild(ingred2);
  table.appendChild(ingred3);
  table.appendChild(ingred4);

  table.classList.add("visible");
}

export default ReceipePage;
