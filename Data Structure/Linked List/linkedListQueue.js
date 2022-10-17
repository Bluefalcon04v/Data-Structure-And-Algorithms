// Implementing Queue Data-Structure using Linked List

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size 
    }

    print(){
        if(this.isEmpty()){
            return (`list is empty`)
        }else{
            let  current = this.head
            let listValues = ``
            while(current){
                listValues += `${current.value} `
                current = current.next
            }
            console.log(listValues);
        }
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }
        else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    removeFromFront(){
        if(this.isEmpty()){
            return `List is Empty`
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }
}

class LinkedListQueue{
    constructor(){
        this.list = new LinkedList
    }

    enqueue(value){
        this.list.append(value)
    }

    dequeue(){
        return this.list.removeFromFront()
    }

    peek(){
        return this.list.head.value
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    getSize(){
        return this.list.getSize()
    }

    print(){
        this.list.print()
    }
}

const queue = new LinkedListQueue()

console.log(queue.isEmpty());

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)

queue.print()

console.log(queue.dequeue());

console.log(queue.peek());

console.log(queue.getSize());