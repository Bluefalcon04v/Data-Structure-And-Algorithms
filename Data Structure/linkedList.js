// About Linked List

class node{
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
}
const list = new LinkedList
console.log('list is empty?', list.isEmpty());
console.log('list size is ', list.getSize());
