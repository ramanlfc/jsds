describe('DoublyLinkedList test cases', () => {

    it('should add nodes at start', () => {

        let list = new DoublyLinkedList();

        for (let i = 0; i < 5; i++) {
            list.addStartNode(new Node(i));
        }

        //    list.display();

        expect(list.count).toBe(5);
        expect(list.peekStart().val).toBe(4);
    });

    it('should append nodes', () => {

        let list = new DoublyLinkedList();

        for (let i = 0; i < 5; i++) {
            list.appendNode(new Node(i));
        }

        // list.display();

        expect(list.count).toBe(5);
        expect(list.peekEnd().val).toBe(4);
    });

    it('should remove start node', () => {

        let list = new DoublyLinkedList();

        for (let i = 0; i < 5; i++) {
            list.appendNode(new Node(i));
        }

        let result = list.removeStartNode();

        expect(list.count).toBe(4);
        expect(result.val).toBe(0);
    });

    it('should remove last node', () => {

        let list = new DoublyLinkedList();

        for (let i = 0; i < 5; i++) {
            list.appendNode(new Node(i));
        }

        let result = list.removeLastNode();

        expect(list.count).toBe(4);
        expect(result.val).toBe(4);
    });

    it('should return true for node present in list', () => {

        let list = new DoublyLinkedList();

        for (let i = 0; i < 5; i++) {
            list.appendNode(new Node(i));
        }

        let node = new Node(20);

        list.appendNode(node);

        expect(list.containsNode(node)).toBe(true);
    });

    it('should return false for node not present in list', () => {

        let list = new DoublyLinkedList();

        for (let i = 0; i < 5; i++) {
            list.appendNode(new Node(i));
        }

        expect(list.containsNode(new Node(1))).toBe(false);
    });

});