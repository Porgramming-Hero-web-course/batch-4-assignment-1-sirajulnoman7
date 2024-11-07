

The significance of union and intersection types in Typescript.?

 union: A union type must be any one of several types. denoted by the "|" symbol.
  for example that i have a typescript  3 types in a one variable ,
  when i use union for those type , then in considering the type of that variable you have to be tell it any one type.
  example:
  {
    type UserInfo ={
        name:string
        developerType:"frontend developer" | "backend developer"
    }
 
      const userInfo:UserInfo={
         name:"SK",
         developer:"frontend developer"
      }

   intersection: Combining many types to for a new type is called intersection type, denoted by the "&" symbol.
    example:
 
    type User1={
        name:string,
        softSkill:"frontend developer"
    }
    type User2={
        name:string,
       hardSkill1:"backend developer"
    }
    type User=User1 & User2

    const user:User={
        name:'hh',
        softSkill:"frontend developer",
        hardSkill1:"backend developer"
    }






 }



