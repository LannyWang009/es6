let object = {
  inception: {
    inceptionAgain: {
      onceMore: {
        message: 'hi'
      }
    }
  }
}
// Using destructuring, and in one line of code,
//  extract a variable from "object" that contains the string "hi"

let { inception: {
  inceptionAgain: {
    onceMore: {
      message: varText
    }
  }
}
} = object
