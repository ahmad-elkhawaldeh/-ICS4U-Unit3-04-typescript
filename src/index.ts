/*
* This program test stack class.
*
* @author  Ahmad El-khawaldeh
* @version 1.0
* @since   2021-12-09
*/

class MrCoxallStack {
  // this is a stack class.
  private stack: unknown[] = []

  push (pushValue: unknown) {
    // this method adds a value to the stack.
    this.stack.push(pushValue)
  }

  showStack () {
    // this prints out the stack.
    for (let counter = this.stack.length - 1; counter >= 0; counter--) {
      console.log(this.stack[counter])
    }
  }

  pop () {
    // this method removes the last part of the stack.
    let returnValue: unknown
    if (this.stack.length !== 0) {
      returnValue = this.stack.pop()
    } else {
      returnValue = null
    }
    return returnValue
  }

  peak () {
    // this method returns the top part of the stack.
    let returnValue: unknown
    if (this.stack.length !== 0) {
      returnValue = this.stack[0]
    } else {
      returnValue = null
    }
    return returnValue
  }

  clear () {
    // this method clears the stack.
    this.stack.length = 0
  }
}

const aStack = new MrCoxallStack()

aStack.push('bob')
aStack.push(70)

console.log('Inicial Stack:')
aStack.showStack()

console.log('Peak Stack:')
const peakVal: unknown = aStack.peak()
console.log(peakVal)

console.log('Show Stack:')
aStack.showStack()

console.log('Clear Stack:')
aStack.clear()
aStack.showStack()

console.log('\nDone.')
