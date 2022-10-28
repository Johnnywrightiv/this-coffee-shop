var coffeeShop = {
  beans: 40,
  money: 50,
  drinkRequirements: {
    latte: {
      beansReq: 10,
      price: 5,
    },
    americano: {
      beansReq: 5,
      price: 3,
    },
    doubleShot: {
      beansReq: 15,
      price: 6,
    },
    frenchPress: {
      beansReq: 12,
      price: 12,
    },
  },
  makeDrink: function(drinkType) {
    if (this.beans < this.drinkRequirements[drinkType].beansReq) {
      return alert('Sorry, we\'re all out of beans!')
    }
    
    if (!this.drinkRequirements.hasOwnProperty(drinkType)) {
      return ('Sorry, we don\'t make ' + drinkType);
    } else {
      return (this.beans -= this.drinkRequirements[drinkType].beansReq);
    };
  },
  buyDrink: function (drinkType) {
    if (this.beans < this.drinkRequirements[drinkType].beansReq) {
      return alert('Sorry, we\'re all out of beans!')
    }
    if (!this.drinkRequirements.hasOwnProperty(drinkType)) {
      return ('Sorry, we don\'t make ' + drinkType);
    } else {
      this.money += this.drinkRequirements[drinkType].price; // increases coffeeShop money by drink price
      this.makeDrink(drinkType);
    };
  },
  buyBeans: function (numBeansPurchased) {
    this.money -= (numBeansPurchased * 5) // beans cost $5
    this.beans += numBeansPurchased
  },
};

// coffeeShop.makeDrink('latte');
// coffeeShop.makeDrink('americano');
// coffeeShop.makeDrink('pourOver');
// coffeeShop.makeDrink('doubleShot');
// coffeeShop.makeDrink('frenchPress');  