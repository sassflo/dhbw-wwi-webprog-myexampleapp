"use strict";

import stylesheet from "./my-receipes.css";
import DB from "../database.js";

let _app = "";

class MyReceipes {
  constructor(app) {
    this._app = app;
    _app = this._app;
  }

  onShow() {
    // Anzuzeigende HTML-Elemente ermitteln
    let section = document.querySelector("#my-receipes").cloneNode(true);

    let db = new DB();
    db.getAllReceipes().then(function(querySnapshot)
    {
      console.log("Receipes loaded");
      onFinishedLoading(querySnapshot);
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

let onFinishedLoading = (receipes) =>
  {
    receipes.forEach(function(doc) {
      let list = document.getElementById("receipe-list");
      let table = document.getElementById("receipe-table");
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data().Name);

      let receipe = document.createElement("tr");
      let receipeName = document.createElement("td");
      let receipeLink = document.createElement("td");

      receipeName.classList.add("name");
      receipeLink.classList.add("edit-link");

      receipeName.textContent = doc.data().Name;
      receipeLink.innerHTML = '<a href="/receipe/edit/' +  doc.id + '"  data-navigo><img class="icon" src="/eye32.5ddd716b.png"><img class="icon" src="/edit32.3ab90f6c.png"></a>';

      receipeLink.setAttribute("href", "/" + doc.id + "/edit");

      receipe.appendChild(receipeName);
      receipe.appendChild(receipeLink);
      table.appendChild(receipe);
      });
      _app._router.updatePageLinks();
      console.log("Alle Page Links updated");
  }

export default MyReceipes;
