describe('CircularQueue test', () => {

    it('should wrap around elements to queue', () => {

        let q = new CircularQueue(5);

        for (let i = 0; i < 5; i++) {
            q.enqueue(i + 1);
        }

        let result = q.dequeue();

        expect(result).toBe(1);

        q.enqueue(10);

        expect(q.peek()).toBe(2);
        expect(q.count).toBe(5);
    });

    it('should dequeue a wrapped around queue', () => {

        let q = new CircularQueue(5);

        for (let i = 0; i < 5; i++) {
            q.enqueue(i + 1);
        }

        let result = q.dequeue();

        expect(result).toBe(1);

        q.enqueue(10);

        expect(q.peek()).toBe(2);
        expect(q.count).toBe(5);

        for (let i = 0, count = q.count; i < count; i++) {
            q.dequeue();
        }

        expect(q.count).toBe(0);
    });


});