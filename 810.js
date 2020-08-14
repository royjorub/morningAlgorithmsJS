class SLNode{
    constructor(value){
    this.value = value
    this.next = null
    }
}

class SLStack {
    constructor() {
        this.head = null;
    }
    push(newVal) {
        // push newVal to top of stack
        var newNode = new SLNode(newVal)
        if (this.head != null){
            this.head = newNode
        }
        else{
            newNode.next = this.head
            this.head = newNode
        }
    
    }
    pop() {
        // remove and return data at top of stack
        if (this.head != null){
            var tempHead = this.head.value
            if (this.head.next != null){
                this.head = this.head.next
                this.head.next = null
            }
            this.head = null;
            return tempHead
        }
    }
    
    peek() {
        // return data at top of stack without removing
        if (list.head != null){
            return list.head.value
        }
    }

    contains(value) {
        // return true if SLStack contains value
        // return false if SLStack does not contain value
        if (this.head !=null){
            var runner = this.head;
            while(runner.next !=null){
                if(runner.value ==value){
                    return true
                    runner = runner.next
                }
            }
            if (runner.value == value){
                return true
            }
            else{return false}
        }
    
    }
    isEmpty() {
        // return true if SLStack is empty
        // return false if SLStack is not empty
        if (this.head == null){
            return true
        }
        else{
            return false
        }
    }
    size() {
        // return length of SLStack
        var count =0;
        if (this.head != null){
            var runner = this.head
            while(runner.next != null){
                count ++
                runner = runner.next
            }
            count ++
        }
    }
    print() {
        // print out the values of the SLStack
        if (this.head != null){
            var runner = this.head
            while(runner.next != null){
                console.log(runner.value)
                runner = runner.next
            }
            console.log(runner.value)
        }
}


////////


// class LinkedListStack {
//     constructor() {
//       this.head = null;
//     }
  
//     // add to top (add new head)
//     // Time: O(1) constant
//     // Space: O(1)
//     push(val) {
//       const newNode = new Node(val);
  
//       if (this.head === null) {
//         this.head = newNode;
//       } else {
//         newNode.next = this.head;
//         this.head = newNode;
//       }
//     }
  
//     // remove from top, (remove head)
//     // Time: O(1) constant
//     // Space: O(1)
//     pop() {
//       if (this.head === null) {
//         return null;
//       }
  
//       const removed = this.head;
//       this.head = this.head.next;
  
//       return removed.data;
//     }
  
//     // aka top
//     // Time: O(1) constant
//     // Space: O(1)
//     peek() {
//       return this.head ? this.head.data : null;
//     }
  
//     // Time: O(n) linear, n = list length
//     // Space: O(1)
//     contains(val) {
//       let runner = this.head;
  
//       while (runner) {
//         if (runner.data === val) {
//           return true;
//         }
//         runner = runner.next;
//       }
//       return false;
//     }
  
//     // Time: O(1) constant
//     // Space: O(1)
//     isEmpty() {
//       return this.head === null;
//     }
  
//     // Time: O(n) linear, n = list length
//     // Space: O(1)
//     size() {
//       let len = 0;
//       let runner = this.head;
  
//       while (runner) {
//         len += 1;
//         runner = runner.next;
//       }
//       return len;
//     }
  
//     // Time: O(n) linear, n = list length
//     // Space: O(n)
//     print() {
//       let runner = this.head;
//       let vals = "";
  
//       while (runner) {
//         vals += `${runner.data}${runner.next ? ", " : ""}`;
//         runner = runner.next;
//       }
//       console.log(vals);
//       return vals;
//     }
//   }

///////