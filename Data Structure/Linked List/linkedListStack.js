// Implementing Stack Data-Structure using Linked List


class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
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

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }
        else{
            node.next = this.head
            this.head = node
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

class LinkedListStack{
    constructor(){
        this.list = new LinkedList()
    }

    push(value){
        this.list.prepend(value)
    }

    pop(){
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

const stack = new LinkedListStack()

console.log(stack.isEmpty());

stack.push(20)
stack.push(10)
stack.push(30)
stack.push(40)

stack.print()

console.log(stack.pop());

console.log(stack.peek());

console.log(stack.getSize());
