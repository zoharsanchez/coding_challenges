/*
Linked Lists
 */

// let ll = require('../data-structures/linkedLists');
// console.log(new ll.LinkedList())
class Node {
	constructor(val) {
		this.value = val || null;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null
		this.tail = null;
		this.length = 0;
	}

	/*
	Append value to end of list.
	Time Complexity:
	Auxiliary Complexity:
	 */
	append(value) {
		let node = new Node(value);
		if (!this.head) {
			this.head = this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = this.tail.next;
		}
		this.length++;
	}

	/*
	Insert value at given index (assume head is index 0).
	Time Complexity:
	Auxiliary Complexity:
	 */
	insertAt(value, index) {
		let node = new Node(value);
		let currNode = this.head;
		let i = 0;
		let previous;

		if (index > this.length) {
			return 'Index is out of range!';
		}
		
		if (index === this.length) {
			// 1 -> 5 -> 10 -> 15
			let temp = this.tail;
			temp.next = node;
			this.tail = node;
			this.length++;
			return;
		}

		while (currNode) {
			if (index === i) {
				if (index === this.length - 1) {
					previous.next = node;
					previous.next.next = currNode;
				} else if (index === 0) {
					let temp = this.head;
					this.head = node;
					this.head.next = temp;
				} else {
					let temp = currNode;
					currNode = node;
					currNode.next = temp;
				}
				this.length++;
				return;
			} else {
				i++;
				previous = currNode;
				currNode = currNode.next;
			}
		}
		return null;
	}

	/*
	Remove a node at a given index
	Time Complexity:
	Auxiliary Complexity:
	 */
	delete(index) {
		let currNode = this.head;
		let i = 0;
		let previous;

		if (index > this.length - 1) {
			return 'Index is out of range';
		}

		while (currNode) {
			if (index === i) {
				// 1 -> 2
				if (index === 0) {
					this.head = currNode.next;
				} else if (index === this.length - 1) {
					// 1 -> 2 -> 4
					this.tail = previous;
					this.tail.next = null;
				} else { // 1 -> 2 -> 3 -> 4
					previous.next = currNode.next;
				}
				this.length--;
				return;
			} else {
				i++;
				previous = currNode;
				currNode = currNode.next;
			}
		}
		return null;
	}

	/*
	A method that checks to see if a value is contained within the list.
	Time Complexity:
	Auxiliary Complexity:
	 */
	contains(value) {
		let currNode = this.head;
		while (currNode) {
			if (value === currNode.value) {
				return true;
			}
			currNode = currNode.next;
		}
		return false;
	}

	/*
	2.1 Remove Dups

	Can we do this in O(n) time? Delete as we go?
	If we have already encountered a value, then we can delete the next
	one we come across. We can use a hash to help determine this, something
	that looks like this:
	{
		1: true,
		2: true,
		3: true,
		4: true
	}
	*/
	removeDups() {
		let currNode = this.head;
		let nonDups = {};
		// Keep track of index
		let i = 0;

		while (currNode) {
			if (!nonDups[currNode.value]) {
				nonDups[currNode.value] = currNode.value;
			} else {

			}
			i++;
			currNode = currNode.next;
		}
	}
}

let ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(2);
ll.append(4);
ll.append(1);

