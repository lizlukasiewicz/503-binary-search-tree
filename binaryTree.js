// Node class
class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
    info() {
        console.log(this.data, this.left, this.right)
    }
}

//binary search tree class
class BinarySearchTree {
    constructor(){
        this.root = null
    }
    //INSERT(DATA) creates a new node with a value data, if the tree is empty it adds this node to 
    //a tree and make it root, otherwise call insert(node, data)
    insert(data) {
        let newNode = new Node(data)
        if (this.root === null){
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    //INSERTNODE(NODE< NEWNODE) compares given data with the data of current node and moves left or right accordingly 
    insertNode(node, newNode){
        if(newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode
            }else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if(node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }
    //dearch for node with given data
    search (node, data) {
        //if tree is empty, return nullz
        if (node === null) {
            return null
        // ⬇️ if data is less than nodes data, move left ⬇
        }else if (data < node.data) {
            return this.search(node.left, data)
        }//⬇️ if data is more than nodes data, move right
        else if (data > node.data) {
            return this.search(node.right, data)
        // ⬇️ if equal, return node
        } else {
            return node
        }
    }
    // print(node) {
    //     if(!node) {
    //         node = this.root
    //     }
    //     console.log(node)
    //     if(node.left) {
    //         console.log(node.left)
    //     }
    //     if(node.right) {
    //         console.log(node.right)
    //     }
    // }
    height(node, data){
        let countLeft = 0 
        let countRight = 0
        if (node === null){
            node = this.root
        }
        let maxHeight = 0 
    function recursiveHeight(node, height, maxHeight) {
            height = 1
            if (node !== null) {
                if (height > maxHeight) {
                    maxHeight = height
                }
                recursiveHeight(node.left, height + 1)
                recursiveHeight(node.right, height + 1)
            }
            console.log(maxHeight)
        }
        recursiveHeight(node)
        return maxHeight
    }
    //find the maximum node in a tree, starts from given node
    findMaxNode(node) {
        if(node.right === null) {
            return node
        } else {
            return this.findMaxNode(node.right)
        }
    }
    //finds the minimum node in a tree,
    findMinNode(node) {
        if (node.left === null) {
            return node
        } else {
            return this.findMinNode(node.left)
        }
    }
}

//100 90 90 80 75 60
const tree = new BinarySearchTree()
tree.insert(100)
tree.insert(90)
//tree.insert(90)
tree.insert(80)

tree.insert(75)
tree.insert(60)
//tree.print()
//console.log(tree)
tree.height()

