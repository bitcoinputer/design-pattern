// Step 1: Create the Component Interface
interface Coffee {
  cost(): number;
  description(): string;
}

// Step 2: Implement the Component Interface
class SimpleCoffee implements Coffee {
  cost(): number {
    return 1;
  }

  description(): string {
    return 'Simple coffee';
  }
}

// Step 3: Create the Base Decorator Class
abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  abstract cost(): number;
  abstract description(): string;
}

// Step 4: Implement Concrete Decorators
class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 0.5;
  }

  description(): string {
    return this.coffee.description() + ', milk';
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 0.2;
  }

  description(): string {
    return this.coffee.description() + ', sugar';
  }
}

class WhippedCreamDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 0.7;
  }

  description(): string {
    return this.coffee.description() + ', whipped cream';
  }
}

class CaramelDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 0.6;
  }

  description(): string {
    return this.coffee.description() + ', caramel';
  }
}

// Step 5: Use the Decorators
let coffee: Coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
coffee = new WhippedCreamDecorator(coffee);
coffee = new CaramelDecorator(coffee);

console.log(`Cost: $${coffee.cost()}`); // Outputs: Cost: $3.0
console.log(`Description: ${coffee.description()}`); // Outputs: Description: Simple coffee, milk, sugar, whipped cream, caramel
