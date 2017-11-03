describe('LinkedList test cases', () => {

    it('should append X number of nodes', () => {

        let list = new LinkedList();

        for (let i = 0; i < 5; i++) {
            list.appendNode(new Node(i));
        }

        expect(list.count).toBe(5);
        expect(list.head.val).toBe(0);
        expect(list.tail.val).toBe(4);

    });

    it('should add X number of nodes at start', () => {

        let list = new LinkedList();

        for (let i = 0; i < 5; i++) {
            list.addNodeStart(new Node(i));
        }

        expect(list.count).toBe(5);
        expect(list.head.val).toBe(4);
        expect(list.tail.val).toBe(0);

    });


    it('should remove tail node', () => {

        let list = new LinkedList();

        for (let i = 0; i < 5; i++) {
            list.appendNode(new Node(i));
        }

        let temp = list.removeLastNode();

        expect(list.count).toBe(4);
        expect(list.tail.val).toBe(3);
        expect(temp.val).toBe(4);
    });

    it('should remove tail node of one element list', () => {

        let list = new LinkedList();

        list.appendNode(new Node(5));

        let temp = list.removeLastNode();

        expect(list.count).toBe(0);
        expect(list.tail).toBe(null);
        expect(temp.val).toBe(5);
    });


    it('should remove head node', () => {

        let list = new LinkedList();

        for (let i = 0; i < 5; i++) {
            list.appendNode(new Node(i));
        }

        let temp = list.removeFirstNode();

        expect(list.count).toBe(4);
        expect(list.head.val).toBe(1);
        expect(temp.val).toBe(0);
    });

    it('should remove head node of one element list', () => {

        let list = new LinkedList();

        list.appendNode(new Node(5));

        let temp = list.removeFirstNode();

        expect(list.count).toBe(0);
        expect(list.head).toBe(null);
        expect(temp.val).toBe(5);
    });

    it('should throw Error on removing from empty list', () => {

        let list = new LinkedList();

        expect(() => {
            list.removeLastNode();
        }).toThrowError(Error);

        expect(() => {
            list.removeFirstNode();
        }).toThrowError(Error);

    });

});