class Person {
    public Name: string
    public Age: number

    constructor(name: string, age: number) {
        this.Name = name
        this.Age = age
    }

    getName(): string {
        return this.Name
    }

    getAge(): number {
        return this.Age
    }
}

const john = new Person('John', 30)
console.log(john.getName()) // After fixing: will print "John"
console.log(john.getAge())  // After fixing: will print 30
