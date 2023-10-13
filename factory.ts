// Step 1: Define the Product Interface
interface Car {
  model: string;
  drive(): void;
}

// Step 2: Implement Concrete Products
class Tesla implements Car {
  model = 'Tesla';

  drive() {
    console.log(`You are driving a ${this.model}`);
  }
}

class Mercedes implements Car {
  model = 'Mercedes';

  drive() {
    console.log(`You are driving a ${this.model}`);
  }
}

// Step 3: Create the Factory
class CarFactory {
  createCar(type: string): Car {
    if (type === 'Tesla') {
      return new Tesla();
    } else if (type === 'Mercedes') {
      return new Mercedes();
    } else {
      throw new Error('Car type not supported');
    }
  }
}

// Step 4: Factory Usage
const carFactory = new CarFactory();

const myTesla = carFactory.createCar('Tesla');
myTesla.drive(); // Outputs: You are driving a Tesla

const myMercedes = carFactory.createCar('Mercedes');
myMercedes.drive(); // Outputs: You are driving a Mercedes
