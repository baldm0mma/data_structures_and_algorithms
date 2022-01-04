class LinkNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const node1 = new LinkNode("one");
const node2 = new LinkNode("two");
const node3 = new LinkNode("three");
const node4 = new LinkNode("four");

node1.next = node2;
node2.next = node3;
node3.next = node4;

const printList = (head) => {
  if (!head) return;
  console.log(head.value);
  printList(head.next);
};

console.log(printList(node1));
console.log("--------------------");

const revList = (curr, prev = null) => {
  if (!curr) return prev;
  const next = curr.next;
  curr.next = prev;
  return revList(next, curr);
};

console.log(printList(revList(node1)));
