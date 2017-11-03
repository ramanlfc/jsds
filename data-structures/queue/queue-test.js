describe('Queue test cases', () => {

    it('should add X elements into the queue', () => {

        let q = new Queue();

        for (let i = 0; i < 5; i++) {
            q.enqueue(i);
        }

        expect(q.count).toBe(5);

        let result = q.peek();
        expect(result).toBe(0);
    });

    it('should dequeue from start of queue', () => {

        let q = new Queue();

        for (let i = 0; i < 5; i++) {
            q.enqueue(i);
        }

        let result = q.dequeue();

        expect(result).toBe(0);
        expect(q.count).toBe(4);
    });

    it('should dequeue all elements from queue', () => {

        let q = new Queue();

        for (let i = 0; i < 5; i++) {
            q.enqueue(i);
        }

        for (let i = 0; i < 5; i++) {
            q.dequeue();
        }

        expect(q.count).toBe(0);
    });

    it('should throw Error on dequeue attempt on empty queue', () => {

        let q = new Queue();

        expect(() => {
            q.dequeue()
        }).toThrowError(Error);
    });

    it('should throw Error on enqueue attempt on full queue', () => {

        let q = new Queue(5);

        for (let i = 0; i < 5; i++) {
            q.enqueue(i);
        }

        expect(() => {
            q.enqueue(20);
        }).toThrowError(Error);
    });

    it('should increase queue capacity', () => {

        let q = new Queue(5);

        for (let i = 0; i < 5; i++) {
            q.enqueue(i);
        }

        expect(() => {
            q.enqueue(20);
        }).toThrowError(Error);

        q.increaseCapacity(10);

        q.enqueue(50);

        expect(q.count).toBe(6);

    });

});