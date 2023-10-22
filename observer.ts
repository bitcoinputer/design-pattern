// Step 1: Observer & Subject Interface
interface Observer {
  update(steps: number, heartRate: number, sleep: number): void;
}

// Subject Interface
interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

// Step 2: FitnessTracker class implementing Subject
class FitnessTracker implements Subject {
  private observers: Observer[] = [];
  private steps: number;
  private heartRate: number;
  private sleep: number;

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    for (let observer of this.observers) {
      observer.update(this.steps, this.heartRate, this.sleep);
    }
  }

  setActivityData(steps: number, heartRate: number, sleep: number): void {
    this.steps = steps;
    this.heartRate = heartRate;
    this.sleep = sleep;
    this.notifyObservers();
  }
}

// Step 3: SmartWatch and Mobile App class implementing Observer
class SmartWatch implements Observer {
  update(steps: number, heartRate: number, sleep: number): void {
    console.log(
      `SmartWatch - Steps: ${steps}, Heart Rate: ${heartRate}, Sleep: ${sleep} hours`
    );
  }
}

// MobileApp class implementing Observer
class MobileApp implements Observer {
  update(steps: number, heartRate: number, sleep: number): void {
    console.log(
      `MobileApp - Steps: ${steps}, Heart Rate: ${heartRate}, Sleep: ${sleep} hours`
    );
  }
}

// Step 4: Usage
const fitnessTracker = new FitnessTracker();
const smartWatch = new SmartWatch();
const mobileApp = new MobileApp();

fitnessTracker.registerObserver(smartWatch);
fitnessTracker.registerObserver(mobileApp);

fitnessTracker.setActivityData(10000, 72, 8);
