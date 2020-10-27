const inventoryList = document.getElementById("inventoryList");

function updateList() {
  inventoryList.innerHTML = null;
  inventoryList.appendChild(makeUL(player.inventory));
}

function makeUL(array) {
    var list = document.createElement("ul");
    list.classList.add("item-list");
    for (var i = 0; i < array.length; i++) {
      if(array[i].count != 0) {
        var item = document.createElement("li");
        item.classList.add("inventoryListItem");

        var icon = document.createElement("span");
        icon.classList.add('icon');
        icon.classList.add(array[i].item.iconRef);
        item.appendChild(icon);
    
        var display = document.createElement("span");
        display.appendChild(
          document.createTextNode(array[i].item.pluralName + ": ")
        );
        item.appendChild(display);
    
        const total = document.createElement("span");
        total.appendChild(document.createTextNode(array[i].count));
        item.appendChild(total);
    
        const weight = document.createElement("span");
        weight.appendChild(document.createTextNode(array[i].item.weight + "g"));
        item.appendChild(weight);
    
        const trash = document.createElement("button");
        trash.addEventListener(
          "click",
          function (e) {
            trashItem(e, this);
          }.bind(array[i]),
          false
        );
        trash.appendChild(document.createTextNode("Trash"));
        item.appendChild(trash);
    
        if (array[i].item.equip) {
          const equip = document.createElement("button");
          equip.addEventListener(
            "click",
            function (e) {
              equipItem(e, this);
            }.bind(array[i]),
            false
          );
          equip.appendChild(document.createTextNode("Equip"));
          item.appendChild(equip);
        }
        list.appendChild(item);
      }
    }
    return list;
  }