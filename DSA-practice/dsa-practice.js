
//compare linked list
function compare(list1, list2) {
    if (!list1.head || !list2.head) return null;
  
    let list1Node = list1.head;
    let list2Node = list2.head;
    while (list1Node && list2Node) {
      if (list1Node.value.toLowerCase() < list2Node.value.toLowerCase()) return -1;
      if (list1Node.value.toLowerCase() > list2Node.value.toLowerCase()) return 1;
      list1Node = list1Node.next;
      list2Node = list2Node.next;
    }
  
    if (!list1Node.next && !list2Node.next) return 0;
    if (!list1Node.next && list2Node.next) return -1;
    if (list1Node.next && !list2Node.next) return 1;
  }
  
  const list1 = new SLL();
  list1.insertLast('B');
  list1.insertLast('i');
  list1.insertLast('l');
  list1.insertLast('b');
  list1.insertLast('o');
  list1.insertLast('a');
  
  const list2 = new SLL();
  list2.insertLast('B');
  list2.insertLast('i');
  list2.insertLast('l');
  list2.insertLast('b');
  list2.insertLast('o');
  list2.insertLast('b');
  
  console.log(compare(list1, list2));

  //palindrome counter
  function isPalidrome(str) {
    if (str.length === 1) return false;
    str = str.toLowerCase();
    let reversed = '';
    for (let i=str.length-1; i>=0; i--) {
      reversed += str[i];
    }
    return reversed === str;
  }
  
  function countPalidromes(str) {
    const words = str.split(' ').filter(word => isPalidrome(word));
    return words.join(', ') + `, ${words.length} Palidromes`;
  }
  
  console.log(countPalidromes('Dad gave mom a Tesla as a racecar'));


  //mode/frequency
function findMode(arr) {
  const hash = {};
  arr.forEach(num => {
    if (hash[num]) {
      hash[num] += 1;
    } else {
      hash[num] = 1;
    }
  });

  let max = 1;
  let maxValue;
  for (const [key, value] of Object.entries(hash)) {
    if (value > max) {
      max = value;
      maxValue = key;
    }
  }
  if (max === 1) {
    return 'there is no mode for this list of numbers';
  } else {
    return `Mode = ${maxValue}, Frequency of mode = ${max}`;
  }
}

console.log(findMode([1, 2, 3, 6, 10, 3, 5, 6, 3, 3]));

// Given a sorted linked list, write an algorithm to delete all duplicate numbers from the sorted linked list.

// 1-2-3-3-4-7-7-7-8-8-9

'use strict';
const SLL = require('../linked_lists/singly-linked-list');
const { display } = require('../linked_lists/utility');
const list = new SLL();
list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(3);
list.insertLast(4);
list.insertLast(7);
list.insertLast(7);
list.insertLast(7);
list.insertLast(8);
list.insertLast(8);
list.insertLast(9);

function removeDups(list) {
  let current = list.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

display(removeDups(list));

// - Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
// - Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

function wordCount(str) {
    const words = str.split(/\W/).filter(Boolean);
    const h = new Map();
    words.forEach(word => {
      if (h.has(word)) {
        h.set(word, h.get(word)+1);
      } else {
        h.set(word, 1);
      }
    });
    const result = [];
    h.forEach((value, key) => {
      result.push(key + ' = ' + value);
    });
    return result.join(', ');
  }
  
  // console.log(wordCount(`"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`));

  function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
 
reverseString("hello");