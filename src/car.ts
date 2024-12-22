class Car {
    public Brand: string
    public Speed: number

    constructor(brand: string, speed: number) {
        this.Brand = brand
        this.Speed = speed
    }

    accelerate(): number {
        this.Speed += 20
        return this.Speed
    }
}

const car = new Car('Toyota', 100)
console.log(car.accelerate()) // After fixing: will print 120
