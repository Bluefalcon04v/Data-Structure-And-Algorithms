// About Linked List with Head and Tail Pointer

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

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }
        else{
            node.next = this.head
            this.head = node
        }
        this.size++
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

    removeFromEnd(){
        if(this.isEmpty()){
            return null
        } 
        const value = this.tail.value
        if(this.size === 1){
            this.head = null
            this.tail = null
        }
        else{
            let previous = this.head
            while(previous.next !== this.tail){
                previous = previous.next
            }
            previous.next = null
            this.tail = previous
        }
        this.size--
        return value
    }
}

const list = new LinkedList()
console.log(`Is list is Empty ${list.isEmpty()}`);

list.append(10)
list.append(20)
list.append(30)
list.append(40)

list.print()

list.prepend(0)
list.prepend(-10)
list.prepend(-20)

list.print()

list.removeFromFront()
list.print()

list.removeFromEnd()
list.print()

console.log(list.getSize());

// Time-Complexity 
// RemoveFromEnd O(n)
// RemoveFromFront, Append, Prepend O(1)