// // Implementing Queue Data-Structure with the help of Object

class Queue{
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }
    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }
    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }
    isEmpty(){
        return this.rear-this.front === 0
    }
    peek(){
        return this.items[this.front]
    }
    size(){
        return this.rear-this.front
    }
    print(){
        console.log(this.items);
    }
}

const queue = new Queue()

console.log(queue.isEmpty());

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

console.log(queue.size());

queue.print()

console.log(queue.dequeue());

console.log(queue.peek());

// it's the more Optimised way to implementing the Queue Data-Structure it have time-complexity of O(1)