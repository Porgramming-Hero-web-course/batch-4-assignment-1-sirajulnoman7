{

    //   Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
    // problem-5 solved
    const person = { name: "Alice", age: 30 };

    const getProperty = <P, V extends keyof P>(user: P, value: V): P[V] => {
        //    console.log(  user[value])
        return user[value]
    }

}