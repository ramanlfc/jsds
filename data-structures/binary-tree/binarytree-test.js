describe('binary tree test cases', () => {

    let root = null;
    beforeEach(() => {
        root = new TreeNode(5);

        root.left = new TreeNode(2);
        root.right = new TreeNode(15);

        root.left.left = new TreeNode(3);
        root.right.right = new TreeNode(19);
    });


    it('should perform breadth first traversal', () => {

        let arr = breadthFirstTraversal(root);

        expect(arr.length).toBe(5);
        expect(arr[0]).toBe(5);
        expect(arr[arr.length - 1]).toBe(19);
    });

    it('should perform pre-order traversal', () => {

        let arr = [];

        preOrderTraversal(root, arr);

        expect(arr.length).toBe(5);
        expect(arr[0]).toBe(5);
        expect(arr[arr.length - 1]).toBe(19);
    });

    it('should perform in-order traversal', () => {

        let arr = [];

        inOrderTraversal(root, arr);

        expect(arr.length).toBe(5);
        expect(arr[0]).toBe(3);
        expect(arr[arr.length - 1]).toBe(19);
    });

    it('should perform post-order traversal', () => {

        let arr = [];

        postOrderTraversal(root, arr);

        expect(arr.length).toBe(5);
        expect(arr[0]).toBe(3);
        expect(arr[arr.length - 1]).toBe(5);
    });
});