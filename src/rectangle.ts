class Rectangle {
    public Width: number
    public Height: number

    constructor(width: number, height: number) {
        this.Width = width
        this.Height = height
    }

    getArea(): number {
        return this.Width * this.Height
    }
}

const rect = new Rectangle(5, 10)
console.log(rect.getArea()) // After fixing: will print 50
