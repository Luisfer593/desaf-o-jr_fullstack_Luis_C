// models/Pizza.js

export class Pizza {
    constructor(name, price, ingredients = []) {
      this.name = name;
      this.price = price;
      this.ingredients = ingredients;
    }
  }
  