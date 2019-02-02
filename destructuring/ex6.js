
let fullName = user => {
  let { name: { first = '', last = '' } } = user

  return first + ' ' + last
}

console.log(fullName({}))

// Oops! This function errors out when we provide an empty object as the User.
// How can we prevent this error by editing the destructuring assignment above?
