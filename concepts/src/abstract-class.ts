abstract class AbstractCar {}

class Car extends AbstractCar {}

const car = new Car();

console.log(car instanceof AbstractCar);
