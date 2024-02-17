interface IMotorcycle {}

class Motorcycle implements IMotorcycle {}

const m = new Motorcycle();

// Emite um erro
console.log(m instanceof IMotorcycle);
