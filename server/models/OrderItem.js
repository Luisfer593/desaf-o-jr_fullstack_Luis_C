// models/OrderItem.js

export class OrderItem {
    constructor(pizza, quantity) {
      this.pizza = pizza;
      this.quantity = quantity;
    }
  
    getTotal() {
      return this.pizza.price * this.quantity;
    }
  }
  