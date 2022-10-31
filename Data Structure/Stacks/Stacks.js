// how to implement Stack Data-Structure and it's Time Complexity

class Stack{
    constructor(){
        this.items = []
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length - 1]
    }
    isEmpty(){
        return this.items.length === 0
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString());
    }
}

const newstack = new Stack()

console.log(newstack.isEmpty());            // to check if the stack is empty or not

newstack.push(2)                            // to push new items in stack 
newstack.push(4.3)
newstack.push(8)
newstack.push("hello world")

console.log(newstack.size());               // to check the size of stack

newstack.print()                            // to print the stack 

console.log(newstack.pop());                // stack works on LIFO  so pop method will print the last item that was inserted and it will remove it from the stack

console.log(newstack.peek());               // peek method will show the last item that was added in the list without removing it

// insertion/removal of elements have time complexity of O(1) because if always add/remove elements from the last of stack.  