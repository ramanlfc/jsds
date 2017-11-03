class Stack {

    constructor(size) {

        if (size === undefined)
            size = 10;

        this.data = [];
        this.size = size;
        this.top = -1;
        this.count = 0;
    }

    isEmpty() {
        return this.top === -1;
    }

    isFull() {
        return this.count == this.size;
    }

    push(val) {

        if (this.isFull())
            throw new Error('Stack is full');

        this.data[++this.top] = val;
        this.count++;
    }

    pop() {

        if (this.isEmpty())
            throw new Error('Stack is empty');

        let temp = this.data[this.top--];
        this.count--;
        return temp;
    }

    clear() {
        this.data = [];
        this.top = -1;
        this.count = 0;
    }

    increaseCapacity(newSize) {
        this.size = newSize + this.size;
    }

    peek() {

        if (this.isEmpty())
            throw new Error('Stack is empty');

        return this.data[this.top];
    }

    display() {
        console.log(this.data);
    }

}