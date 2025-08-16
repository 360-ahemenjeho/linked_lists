class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  #head = null;
  #size = 0;

  append(data) {
    const newNode = new Node(data);
    if (!this.#head) {
      this.#head = newNode;
    } else {
      let current = this.#head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.#size++;
  }

  prepend(data) {
    if (!this.#head) {
      this.#head = new Node(data);
    } else {
      const newNode = new Node(data, this.#head);
      this.#head = newNode;
    }
    this.#size++;
  }

  head() {
    return this.#head.data;
  }

  getSize() {
    return this.#size;
  }

  tail() {
    if (!this.#head) {
      return null;
    }
    let current = this.#head;
    while (current.next) {
      current = current.next;
    }
    return current.data;
  }
}

const vowels = new LinkedList();
vowels.append("e");
vowels.append("i");
vowels.append("o");
vowels.append("u");
// console.log("Head: ", vowels.head());
vowels.prepend("a");
// console.log("Head after prepend: ", vowels.head());
// console.log(vowels.getSize());
console.log("Vowel tail:", vowels.tail());
