{


    // problem-8 solved 
    // Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

    const user = { name: "Alice", age: 25, email: "alice@example.com" };
    const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean | undefined => {
        for (let element of keys) {
            if ((element in obj)) {
                return true
            }
            return false
        }
    }
    //    validateKeys(user,["age"])



}