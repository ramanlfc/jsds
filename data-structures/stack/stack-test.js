describe('Stack test cases', () => {

    it('should add X elements to stack', () => {

        let s = new Stack();

        for (let i = 0; i < 5; i++)
            s.push(i);

        expect(s.count).toBe(5);
    });

    it('should pop X elements from stack', () => {

        let s = new Stack();

        for (let i = 0; i < 5; i++)
            s.push(i);

        for (let i = 0; i < 2; i++)
            s.pop();

        expect(s.count).toBe(3);
    });

    it('should return top element without removing it', () => {

        let s = new Stack();

        for (let i = 0; i < 5; i++)
            s.push(i);

        expect(s.peek()).toBe(4);
    });

    it('should not allow pop on empty stack', () => {

        let s = new Stack();

        expect(() => {
            s.pop();
        }).toThrowError(Error);

    });

    it('should not allow push on full stack', () => {

        let s = new Stack();

        for (let i = 0; i < 10; i++)
            s.push(i);

        expect(() => {
            s.push(50);
        }).toThrowError(Error);

    });
    
    it('should increase stack capacity',()=>{

        let s = new Stack();
        
                for (let i = 0; i < 10; i++)
                    s.push(i);

         expect(()=>{
            s.push(50);
         }).toThrowError(Error);           

         s.increaseCapacity(20);

         s.push(50);

         expect(s.count).toBe(11);

    });

});