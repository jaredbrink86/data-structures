class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructort() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
    }
    return current;
  }
  shift() {
    if (this.length === 0) return undefined;
    let removed = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return removed;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      this.tail = newNode;
      return this;
    }
  }
  get(index) {
    if (index < 0 || index > this.length) {
      return null;
    }
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }
  set(index, val) {
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    let nodeAfter;
    let nodeBefore;
    let newNode;
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    newNode = new Node(val);
    nodeBefore = this.get(index - 1);
    nodeAfter = prev.next;
    nodeBefore.next = newNode;
    newNode.next = nodeAfter;
    this.length++;
    return true;
  }
}
