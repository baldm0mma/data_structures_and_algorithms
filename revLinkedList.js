class LinkNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new LinkNode("a");
const b = new LinkNode("b");
const c = new LinkNode("c");
const d = new LinkNode("d");

a.next = b;
b.next = c;
c.next = d;

const printList = (head) => {
  if (!head) return;
  console.log(head.value);
  printList(head.next);
};

printList(a);
console.log("----------------------------------------->");

// Iterative solution
// const reverseList = (head) => {
//   let currentNode = head;
//   let previousNode = null;

//   while (currentNode) {
//     const next = currentNode.next;
//     currentNode.next = previousNode;

//     previousNode = currentNode;
//     currentNode = next;
//   }

//   return previousNode;
// };

// Recursive solution
const reverseList = (head, previousNode = null) => {
  // base case
  if (!head) return previousNode;
  const next = head.next;
  head.next = previousNode;
  return reverseList(next, head);
};

const reversedList = reverseList(a);

printList(reversedList);
