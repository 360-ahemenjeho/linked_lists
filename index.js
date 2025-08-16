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
    return this.#head ? this.#head.data : null;
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

  at(index) {
    if (index < 0 || index >= this.#size) {
      return null;
    }
    let current = this.#head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.data;
  }

  pop() {
    if (!this.#head) {
      return null;
    }
    let current = this.#head;
    let popped = null;
    if (!current.next) {
      popped = current;
      this.#head = null;
    } else {
      while (current.next.next) {
        current = current.next;
      }
      popped = current.next;
    }
    current.next = null;
    this.#size--;
    return popped.data;
  }

  contains(data) {
    if (!this.#head) {
      return false;
    }
    let current = this.#head;
    while (current.next) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return current.data === data;
  }

  find(data) {
    if (!this.#head) {
      return -1;
    }
    let current = this.#head;
    let index = 0;
    while (current.next) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }
    return current.data === data ? index : -1;
  }

  toString() {
    if (!this.#head) {
      return "";
    }
    let current = this.#head;
    let result = "";
    while (current) {
      result += current.data;
      if (current.next) {
        result += " -> ";
      }
      current = current.next;
    }
    return result;
  }

  insertAt(index, data) {
    if (index < 0 || index > this.#size) {
      return -1;
    }
    if (index === 0) {
      this.prepend(data);
      return 0;
    }
    if (index === this.#size) {
      this.append(data);
      return index;
    }
    let current = this.#head;
    let previous = null;
    let i = 0;
    while (i < index) {
      previous = current;
      current = current.next;
      i++;
    }

    const newNode = new Node(data, current);
    previous.next = newNode;

    this.#size++;
    return index;
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
// console.log("Vowel tail:", vowels.tail());
// console.log("Vowel at index 0:", vowels.at(0));
// console.log("Vowel at index 3:", vowels.at(3));
// console.log("Vowel at index 4:", vowels.at(4));
// console.log("Popped vowel:", vowels.pop());
// console.log("Popped vowel:", vowels.pop());
// console.log("Vowel at index 3 (Before popped):", vowels.at(3));
// console.log("Vowel at index 4 (Before popped):", vowels.at(4));
// console.log("Contains a?", vowels.contains("a"));
// console.log("Contains b?", vowels.contains("b"));
// console.log("Find index of 'b':", vowels.find("b"));
// console.log("Find index of 'a':", vowels.find("a"));
// console.log("Stringified vowels: ", vowels.toString());
console.log("Insert at 1: ", vowels.insertAt(1, "k"));
console.log("Stringified vowels: ", vowels.toString());
