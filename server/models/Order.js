// models/Order.js
let nextOrderId = 1; // simulamos autoincremental

export class Order {
  constructor(items = []) {
    this.id = nextOrderId++;
    this.items = items; // array de OrderItem
    this.createdAt = new Date();
  }

  getTotal() {
    return this.items.reduce((acc, item) => acc + item.getTotal(), 0);
  }

  getSummary() {
    return this.items.map(item => ({
      pizza: item.pizza.name,
      quantity: item.quantity,
      subtotal: item.getTotal()
    }));
  }
}
