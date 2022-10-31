// Implementing Factorial using Stack Data-Structure

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

function factorial(n){
    var subject = new Stack()
    while(n > 1){
        subject.push(n--)
    }

    var product = 1
    while(subject.size() > 0){
        product *= subject.pop()
    }
    return product
}


console.log(factorial(5));
console.log(factorial(6));