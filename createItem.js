function createItem(item) {
  item = eval(`items.${item}`);
  item.button.disabled = true;
  var hasNeededMaterials = item.requirements.every((req) => {
    const reqRef = eval(`items.${req.item}`);
    const itemToUse = player.inventory.find((i) => i.item == reqRef);
    if (itemToUse) {
      if (itemToUse.count >= req.count) {
        return true;
      } else {
        alert("not enough " + req.item);
        item.button.disabled = false;
        return false;
      }
    } else {
      alert("not enough " + req.item);
      item.button.disabled = false;
      return false;
    }
  });
  if (hasNeededMaterials == true) {
    setTimeout(function () {
      item.requirements.forEach((req) => {
        const itemRef = eval(`items.${req.item}`);
        const itemToUse = player.inventory.find((i) => i.item == itemRef);
        itemToUse.count = itemToUse.count - req.count;
      });
      placeItemInInv(item);
      item.button.disabled = false;
      updateList();
    }, item.cooldown);
  }
}

function placeItemInInv(item) {
  let itemToCraft = player.inventory.find((i) => i.item == item);
    if (itemToCraft) {
      itemToCraft.count++;
    } else {
      player.inventory.push({ item: item, count: 1 });
      itemToCraft = player.inventory.find((i) => i.item == item);
    }
}

actions = {
  forage: {
    cooldown: 10000,
    items: [
      [5, items.grass],
      [5, items.leaf],
      [5, items.stick]
    ]
  },
  excavate: {
    cooldown: 10000,
    items: [
      [5, items.dirt],
      [5, items.rock]
    ]
  },
  hunt: {
    cooldown: 10000,
    items: [
      [5, items.feather]
    ]
  }
}

function forage() {
  setTimeout(function () {
    placeItemInInv(items.grass);
  }, actions.forage.cooldown)
}