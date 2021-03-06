class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    const compare = function(node1, node2) {
      if (node1.val < node2.val) {
        if (node2.left) {
          compare(node1, node2.left);
        } else {
          node2.left = node1;
        }
      }
      if (node1.val > node2.val) {
        if (node2.right) {
          compare(node1, node2.right);
        } else {
          node2.right = node1;
        }
      }
    };
    compare(newNode, this.root);
    return this;
  }
  find(val) {
    if (this.root === null) return false;
    let current = this.root;
    while (current !== null) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  breadthFirstSearch() {
    let queue = [this.root];
    let values = [];
    let current;
    while (queue.length) {
      current = queue.shift();
      values.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return values;
  }

  DFSPreOrder() {
    values = [];
    function traverseTree(node) {
      values.push(node.value);
      if(node.left) {
        traverseTree(node.left)
      }
      if(node.right) {
        traverseTree(node.right)
      }
    }
    traverseTree(this.root)
    return values
  }

  DFSPostOrder() {
    values = [];
    function traverseTree(node) {
      if(node.left) {
        traverseTree(node.left)
      }
      if(node.right) {
        traverseTree(node.right)
      }
      values.push(node.value);
    }
    traverseTree(this.root)
    return values
  }

  DFSInOrder() {
    values = [];
    function traverseTree(node) {
      if(node.left) {
        traverseTree(node.left)
      }
      values.push(node.value);
      if(node.right) {
        traverseTree(node.right)
      }
    }
    traverseTree(this.root)
    return values
  }
}
