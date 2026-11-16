class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(Head = null) {
    this.Head = Head;
  }
  add(newNode) {
    let node = this.Head;
    if (node == null) {
      this.Head = newNode;
      return;
    }
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
  }
  deleteByIndex(index) {
    if (!this.Head) return;

    if (index === 0) {
      this.Head = this.Head.next;
      return;
    }

    let current = this.Head;
    let previous = null;
    let count = 0;

    while (current !== null && count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    if (current !== null && previous !== null) {
      previous.next = current.next;
    }
  }

  displayList() {
    let node = this.Head;
    var str = "";
    while (node) {
      str += node.data + "->";
      node = node.next;
    }
    str += "NULL";
    console.log(str);
  }
}

let numList = new LinkedList();
numList.add(new Node(2));
numList.add(new Node(3));
numList.add(new Node(4));
numList.add(new Node(5));
numList.add(new Node(6));
numList.add(new Node(7));
numList.deleteByIndex(2);
numList.displayList();

// node challenge 2
const allElements = document.getElementsByTagName("*");

for (let i = 0; i < allElements.length; i++) {
  console.log(allElements[i].tagName);
}
