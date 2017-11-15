function breadthFirstTraversal(node) {

    if (node === null)
        return;

    let temp = [];
    //let queue = new CircularQueue();
    let queue = [];
    queue.push(node);
    // queue.enqueue(node);

    while (queue.length !== 0) {

        //  let tempNode = queue.dequeue();
        let tempNode = queue.shift();

        temp.push(tempNode.val);

        if (tempNode.left !== null)
            queue.push(tempNode.left);

        if (tempNode.right !== null)
            queue.push(tempNode.right);

    }// end while

    return temp;
}

function preOrderTraversal(node, arr) {

    if (node === null)
        return;

    arr.push(node.val);
    preOrderTraversal(node.left, arr);
    preOrderTraversal(node.right, arr);
}

function inOrderTraversal(node, arr) {

    if (node === null)
        return;

    inOrderTraversal(node.left, arr);
    arr.push(node.val);
    inOrderTraversal(node.right, arr);
}


function postOrderTraversal(node, arr) {

    if (node === null)
        return;

    postOrderTraversal(node.left, arr);
    postOrderTraversal(node.right, arr);
    arr.push(node.val);
}