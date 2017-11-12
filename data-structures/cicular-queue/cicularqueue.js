class CircularQueue {

    constructor(size) {

        if (size === undefined)
            this.size = 10;
        else
            this.size = size;

        this.data = [];
        this.head = -1;
        this.tail = -1;
        this.count = 0;
    }

    isEmpty() {
        return this.count === 0;
    }

    isFull() {
        return this.count === this.size;
    }

    enqueue(val) {

        if (this.isFull())
            throw new Error('Queue is full');

        if (this.isEmpty())
            this.head++;

        if (this.tail === this.size - 1)
            this.tail = -1

        this.data[++this.tail] = val;
        this.count++;
    }

    dequeue() {

        if (this.isEmpty())
            throw new Error('Queue is empty');

        if (this.count === 1)
            this.tail--;

        if (this.head === this.size)
            this.head = -1;

        let temp = this.data[this.head++];
        this.count--;
        return temp;
    }

    peek() {
        if (this.isEmpty())
            throw new Error('Queue is empty');

        return this.data[this.head];
    }

    clear(){
        this.data = [];
        this.head = -1;
        this.tail = -1;
        this.count = 0;
    }

}