// About Linked List with Head Pointer

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

    insert(value, index){
        if(index < 0 || index > this.size ){
            return console.log(`invalid index ${index}`);
        }
        if(index === 0){
            this.prepend(value)
        }
        else{
            const node = new Node(value)
            let previous = this.head
            for(let i = 0; i < index-1; i++){
                previous = previous.next
            }
            node.next = previous.next
            previous.next = node
            this.size++
        }
    }

    removeFrom(index){
        if(index < 0 || index >= this.size){
            return (`invalid Index ${index}`)
        }
        let removedNode 
        if(index === 0){
            removedNode = this.head
            this.head = this.head.next
        }
        else{
            let previous = this.head
            for(let i = 0; i < index - 1; i++){
                previous = previous.next
            }
            removedNode = previous.next
            previous.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

    removeValue(value){
        if(this.isEmpty()){
            return (`list is Empty`)
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value
        }
        else{
            let previous = this.head
            while(previous.next && previous.next.value !== value){
                previous = previous.next
            }
            if(previous.next){
                const removedNode = previous.next
                previous.next = removedNode.next
                this.size--
                return value
            }
            return (`${value} doesn't exists in list`)
        }
    }

    search(value){
        if(this.isEmpty()){
            return (`list is Empty`)
        }
        let i = 0
        let current = this.head
        while(current){
            if(current.value === value){
                return (`${value} exists in the list at index ${i}`)
            }
            current = current.next
            i++
        }
        return (`${value} doesn't belongs in list`)
    }

    reverse(){
        let previous = null
        let current = this.head
        while(current){
            let next = current.next
            current.next = previous
            previous = current
            current = next
        }
        this.head = previous
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

list.insert(80, 20)
list.insert(5, 0)
list.insert(15, 3)
list.insert(45, 6)


list.print()
console.log('list size is ', list.getSize());

console.log(list.removeFrom(10));
console.log(list.removeFrom(2));
console.log(list.removeFrom(5));
list.print()

console.log(list.removeValue(100));
console.log(list.removeValue(5));
console.log(list.removeValue(15));
list.print()

console.log(list.search(5));
console.log(list.search(10));
console.log(list.search(60));

list.reverse()
list.print()

// Time Complexity of Prepend is = O(1)
// Time Complexity of Append is = O(n)
// Time Complexity of print is = O(n)
// Time Complexity of removing 1st element is = O(1)
// Time Complexity of removing other element is = O(n)