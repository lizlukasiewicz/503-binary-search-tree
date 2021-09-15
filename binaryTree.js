class Node{
    constructor(data, left, right){
        this.data = data
        this.left = left
        this.right = right
    }
    info() {
        console.log(this.data, this.left, this.right)
    }
}

class BinaryTree extends Node{
    constructor(root, data, left, right){
        super(data, left, right);
        this.root = root;
    }
    insert(data) {
        let newNode = new Node(data)
        if (!this.root){
            this.root = newNode
        }
        //⬇️ "catch" for while loop
        let count = 10
        let currentNode = this.root
        while (currentNode < count) {
            if (newNode.data < currentNode.data) {
                count--
                if (!currentNode.left) {
                    currentNode.left = newNode
                }
                else {
                    currentNode = currentNode.left
                }
            } else if (newNode.data > currentNode.data) {
                count--
                if (!currentNode.right) {
                    currentNode.right = newNode
                }
                else {
                    currentNode = currentNode.right
                }
            }
        }
    }
    print(node) {
        if(!node) {
            node = this.root
        }
        console.log(node)
        if(node.left) {
            console.log(node.left)
        }
        if(node.right) {
            console.log(node.right)
        }
    }
    height(node){
        let countLeft = 0 
        let countRight = 0
        if (!node){
            node = this.root
        }
        let maxHeight = 0 
        
        function recursiveHeight(node, height, maxHeight) {
            height = 1
            if (node) {
                if (height > maxHeight) {
                    maxHeight = height
                }
                recursiveHeight(Node.left, height + 1)
                recursiveHeight(Node.right, height + 1)
            }
        }
        recursiveHeight(node)
        return maxHeight
    }
}

//100 90 90 80 75 60
const tree = new BinaryTree()
tree.insert(100)
tree.insert(90)
tree.insert(90)
tree.insert(80)
console.log(tree.root)
// tree.insert(75)
// tree.insert(60)
//tree.print()


