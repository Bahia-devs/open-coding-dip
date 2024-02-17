interface IMotorcycle {}

class Motorcycle implements IMotorcycle {}

const m = new Motorcycle();

console.log(m instanceof IMotorcycle);
