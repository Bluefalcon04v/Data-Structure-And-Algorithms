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

    prepend(value){                            // to add value at the front           
        const node = new Node(value)           // making a new Node
        if(this.isEmpty()){                    // checking if list is Empty new Node will be set as a head node, else it will connect new node at the beginning 
            this.head = node
        }else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){                             // to add value at the end  
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }
        else{
            let previous = this.head
            while(previous.next){
                previous = previous.next
            }
            previous.next = node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log(`List is empty`);
        }else{
            let current = this.head
            let listValues = ''
            while(current){
                listValues += `${current.value}  `
                current = current.next
            }
            console.log(`list items are = ${listValues}`);
        }
    }
}

const list = new LinkedList
console.log('list is empty?', list.isEmpty());

list.print()

list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)

list.append(50)
list.append(60)
list.append(70)

list.print()
console.log('list size is ', list.getSize());

// Time Complexity of Prepend is = O(1)
// Time Complexity of Append is = O(n)
// Time Complexity of print is = O(n)