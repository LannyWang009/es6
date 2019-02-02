let array = [
  {
    name: 'Amanda',
    role: 'Instructor'
  },
  {
    name: 'Kamilah',
    role: 'Student'
  }
]
// Using destructuring, and in one line of code,
//  create 2 variables that extract the names of everyone in the array

let nameArray = [array[0].name, array[1].name]

let [{ name: var3 }, { name: var4 }] = array
