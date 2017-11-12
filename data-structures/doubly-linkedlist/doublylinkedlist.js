class Node {

    constructor(val) {
        this.next = null;
        this.prev = null;
        this.val = val;
    }

}

class DoublyLinkedList {

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
        return this.count === 0;
    }

    isFull() {
        return this.count === this.size;
    }

    addStartNode(node) {
        if (this.isFull())
            throw new Error('List is full');

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

        if (this.isFull())
            throw new Error('List is full');

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }

        this.count++;
    }

    removeStartNode() {

        if (this.isEmpty())
            throw new Error('list is empty');

        let temp = new Node(this.head.val);

        if (this.count === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.count--;
        return temp;
    }

    removeLastNode() {

        if (this.isEmpty())
            throw new Error('list is empty');

        let temp = new Node(this.tail.val);

        if (this.count === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.count--;
        return temp;
    }

    containsNode(node) {

        if (this.isEmpty())
            throw new Error('list is empty');

        let current = this.head;

        while (current !== null) {
            if (current === node)
                return true;

            current = current.next;
        }

        return false;
    }

    peekStart() {

        if (!this.isEmpty())
            return new Node(this.head.val);

        return null;
    }

    peekEnd() {

        if (!this.isEmpty())
            return new Node(this.tail.val);

        return null;
    }

    display() {

        let temp = '[  ';
        let current = this.head;

        while (current !== null) {
            temp += current.val + ' ';
            current = current.next;
        }

        temp += ']';
        console.log(temp);
    }

}