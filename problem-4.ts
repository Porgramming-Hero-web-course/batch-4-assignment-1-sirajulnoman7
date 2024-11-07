{


    // problem-4 solved
    // Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.


    type Circle = {
        name: string
        radius: number

    }
    type Rectangle = {
        name: string
        height: number
        width: number
    }
    const calculateShapeArea = (shape: Rectangle | Circle): number | undefined => {
        if ("radius" in shape) {
            console.log(Math.PI * shape.radius * shape.radius);
            return Math.PI * shape.radius * shape.radius
        }
        else if (shape.height & shape.width) {
            return shape.height * shape.width
        }

    }
}