// Step 1 Create Payment Interface
interface PaymentStrategy {
  processPayment(amount: number): void;
}

// Step 2 Create Payment Concrete Classes
class PayPalStrategy implements PaymentStrategy {
  processPayment(amount: number): void {
    console.log(`Paid ${amount} using PayPal.`);
  }
}

class CreditCardStrategy implements PaymentStrategy {
  processPayment(amount: number): void {
    console.log(`Paid ${amount} using Credit Card.`);
  }
}

// Step 3 Create Online Shop Class
class OnlineStore {
  private paymentStrategy: PaymentStrategy;

  constructor(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  checkout(amount: number): void {
    this.paymentStrategy.processPayment(amount);
  }
}

// Step 4 Usage of Payment Strategy
const paypal = new PayPalStrategy();
const storeWithPayPal = new OnlineStore(paypal);
storeWithPayPal.checkout(100); // Outputs: "Paid 100 using PayPal."

const creditCard = new CreditCardStrategy();
const storeWithCreditCard = new OnlineStore(creditCard);
storeWithCreditCard.checkout(200); // Outputs: "Paid 200 using Credit Card."
