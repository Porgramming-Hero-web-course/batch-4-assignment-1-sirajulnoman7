{

    //  problem -7  solved
    // Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current yea
    class Car {
        model: string
        year: number

        constructor(model: string, year: number) {
            this.model = model
            this.year = year
        }
        getCarAge() {
            const currentDate: number = (new Date).getFullYear()
            // console.log(currentDate)
            const carAge: number = currentDate - this.year
            return carAge

        }

    }
    // const car=new Car("Honda",2015)
    //  console.log( car.getCarAge())







    // 
}