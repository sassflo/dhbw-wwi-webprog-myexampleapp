"use strict";

import stylesheet from "./my-receipes.css";
import DB from "../database.js";

class MyReceipes {
  constructor(app) {
    this._app = app;
  }

  onShow() {
    // Anzuzeigende HTML-Elemente ermitteln
    let section = document.querySelector("#my-receipes").cloneNode(true);

    let db = new DB();
    db.getAllReceipes().then(function(querySnapshot)
    {
      let list = document.getElementById("receipe-list");
      let table = document.getElementById("receipe-table");

      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data().Name);

        let receipe = document.createElement("th");
        let receipeName = document.createElement("td");
        let receipeLink = document.createElement("td");

        receipeName.classList.add("name");
        receipeLink.classList.add("edit-link");

        receipeName.textContent = doc.data().Name;
        receipeLink.innerHTML = '<a href="/receipe/edit/' +  doc.id + '"  data-navigo>Edit</a>';

        receipeLink.setAttribute("href", "/" + doc.id + "/edit");

        receipe.appendChild(receipeName);
        receipe.appendChild(receipeLink);
        table.appendChild(receipe);
        });
    });

    return {
        className: "my-receipes",
        topbar: section.querySelectorAll("header > *"),
        main: section.querySelectorAll("main > *"),
    };
  }

  onLeave(goon) {
    return true;
  }

  get title() {
    return "Mein Rezepte";
  }
}

export default MyReceipes;
