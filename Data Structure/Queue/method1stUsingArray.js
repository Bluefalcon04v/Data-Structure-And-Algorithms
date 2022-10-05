// Implementing Queue Data-Structure with the help of Array

class Queue{
    constructor(){
        this.items = []                      // defining it as a array
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        return this.items.shift()            // it have Time-Complexity of O(n)
    }
    isEmpty(){
        return this.items.length === 0
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString());
    }
}

const queue = new Queue

console.log(queue.isEmpty());

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

console.log(queue.size());

queue.print()

console.log(queue.dequeue());

console.log(queue.peek());

// Because we have used Arrays while making Queue, and we have used "shift" method which have time-complexity of O(n)  