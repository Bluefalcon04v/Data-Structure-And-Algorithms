// About Linked List

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
    prepend(value){
        const node = new Node(value)           // making a new Node
        if(this.isEmpty()){                    // checking if list is Empty new Node will be set as a head node, else it will connect new node at the beginning 
            this.head = node
        }else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
}

const list = new LinkedList
console.log('list is empty?', list.isEmpty());

list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)

console.log('list size is ', list.getSize());