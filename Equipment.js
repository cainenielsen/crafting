const optionList = document.getElementById("optionList");

function equipItem(e, local) {
  optionList.innerHTML = null;
  optionList.appendChild(loadOptions(local.item.equip, local));
  openModal(local.item.equip);
}

var modal = document.getElementById("myModal");

function openModal() {
  modal.style.display = "block";
}

// Modal X Button
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  closeModal();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

function closeModal() {
  modal.style.display = "none";
}

function loadOptions(availPlacementOptions, itemDetails) {
  console.log(itemDetails);
  var list = document.createElement("ul");
  list.classList.add("item-list");
  for (var i = 0; i < availPlacementOptions.length; i++) {
    var item = document.createElement("li");
    item.classList.add("equipListItem");

    var display = document.createElement("span");
    const displayName = eval(`player.equipment.${availPlacementOptions[i]}.displayName`);
    display.appendChild(document.createTextNode(displayName));
    item.appendChild(display);

    var selected = document.createElement("span");
    const selectedItem = eval(`player.equipment.${availPlacementOptions[i]}.selected`);

    const select = document.createElement("button");

    if (selectedItem) {
      selected.appendChild(
        document.createTextNode("Selected: " + selectedItem.displayName)
      );
      select.addEventListener(
        "click",
        function (e) {
          replaceEquip(e, this);
        }.bind({selectedPlacementOption: availPlacementOptions[i], itemDetails: itemDetails, displayName: displayName}),
        false
      );
      select.appendChild(document.createTextNode("Replace"));
    } else {
      selected.appendChild(document.createTextNode("Selected: None"));
      select.addEventListener(
        "click",
        function (e) {
          selectEquip(e, this);
        }.bind({selectedPlacementOption: availPlacementOptions[i], itemDetails: itemDetails, displayName: displayName}),
        false
      );
      select.appendChild(document.createTextNode("Select"));
    }
    item.appendChild(selected);
    item.appendChild(select);
    

    list.appendChild(item);
  }
  return list;
}

function selectEquip(e, local) {
  var displayObj = eval(`player.equipment.${local.selectedPlacementOption}.displayObj`);
  const slot = eval(`player.equipment.${local.selectedPlacementOption}`);
  slot.selected = local.itemDetails.item;
  displayObj.innerHTML = local.displayName + ': ' +  local.itemDetails.item.displayName;
  local.itemDetails.count--;
  updateList();
  closeModal();
}


function replaceEquip(e, local) {
  const slot = eval(`player.equipment.${local.selectedPlacementOption}`);
  console.log(slot.selected);
  placeItemInInv(slot.selected);
  slot.selected = local.itemDetails.item;

  var displayObj = eval(`player.equipment.${local.selectedPlacementOption}.displayObj`);
  displayObj.innerHTML = local.displayName + ': ' +  local.itemDetails.item.displayName;

  local.itemDetails.count--;
  updateList();
  closeModal();
}
