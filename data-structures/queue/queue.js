class Queue {

    constructor(size) {

        if (size === undefined)
            this.size = 10;

        this.data = [];
        this.count = 0;
        this.rear = -1;
        this.front = -1;
        this.size = size;
    }

    isEmpty() {
        return this.count === 0;
    }

    isFull() {
        return this.count === this.size;
    }

    peek() {

        if (this.isEmpty())
            throw new Error('Queue is empty');

        return this.data[this.front];
    }

    enqueue(val) {

        if (this.isFull())
            throw new Error('Queue is full');

        if (this.isEmpty()) {
            this.data[++this.front] = val;
            this.rear++;
        } else {
            this.data[++this.rear] = val;
        }

        this.count++;
    }

    dequeue() {

        if (this.isEmpty())
            throw new Error('Queue is empty');

        let temp = this.data[this.front];

        if (this.front === 0 && this.rear === 0) {
            this.front = -1;
            this.rear = -1;
        } else if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front++;
        }

        this.count--;
        return temp;
    }

    increaseCapacity(newSize) {
        this.size = newSize + this.size;
    }

    clear() {
        this.data = [];
        this.rear = -1;
        this.front = -1;
        this.count = 0;
    }

    display() {
        console.log(this.data);
    }

}