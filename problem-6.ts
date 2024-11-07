{
    //  Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile
    // problem-6 solved
    interface Profile {
        name: string
        age: number
        email: string
    }
    const profile: Profile = {
        name: "Alice",
        age: 26,
        email: "alice@example.com"
    }
    const updateProfile = <T extends Partial<Profile>>(profile: Profile, Partial: T): T => {

        return ({ ...profile, ...Partial })
    }


}