class Node {

    constructor(val) {
        this.val = val;
        this.next = null;
    }

}

class LinkedList {

    constructor(size) {

        if(size === undefined)
        this.size = 10;
        else
        this.size = size;

        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    isEmpty() {
        return this.head === null;
    }

    addNodeStart(node) {

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.count++;
    }

    appendNode(node) {

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.count++;
    }

    removeFirstNode() {

        if (this.isEmpty())
            throw new Error('LinkedList is empty');

        let temp = new Node(this.head.val);

        if (this.count === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.count--;
        return temp;
    }

    removeLastNode() {

        if (this.isEmpty())
            throw new Error('LinkedList is empty');

        let temp = new Node(this.tail.val);

        if (this.count === 1) {
            this.head = null;
            this.tail = null;
        } else {
            //  this.tail= null;
            let current = this.head;

            while (current.next !== this.tail) {
                current = current.next;
            }

            this.tail = current;
            this.tail.next = null;
        }

        this.count--;
        return temp;
    }

    display() {
        let current = this.head;

        let temp = '[  ';
        while (current != null) {
            temp += current.val + '  ';
            current = current.next;
        }// end while
        temp += ']';

        console.log(temp);
    }

}