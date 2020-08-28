// TUE
/*
    Inserting a new value in to the heap requires you to push
    the value to the back of the array and then shiftUp, the value
    to the correct index

*/
class MinHeap{
    constructor(){
        this.heap = [null];
    }


    insert(value){
        this.heap.push(value)
        this.shiftUp();
    }

    shiftUp(i= this.heap.length-1){
        if (this.heap[i]< this.heap[Math.floor(i/2)]){
            var temp= this.heap[i];
            this.heap[i]=this.heap[Math.floor(i/2)];
            this.heap[Math.floor(i/2)] = temp;
            this.shiftUp(Math.floor(i/2))
        }
        return 

    }
    printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
        if (parentIdx > this.heap.length - 1) {
          return;
        }
    
        spaceCnt += spaceIncr;
        this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);
    
        console.log(
          " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${this.heap[parentIdx]} (${parentIdx})`
        );
    
        this.printHorizontalTree(parentIdx * 2, spaceCnt);
    }
    printArr(...appendedMsgs) {
        const arrStr = `\n[${["null", ...this.heap.slice(1)].join(", ")}]`;
        const msgLen = arrStr.length + appendedMsgs.toString().length;
        console.log("-".repeat(msgLen), arrStr, ...appendedMsgs);
    }

    /*
    Extracting a value from a heap takes our "ROOT" and returns that value
    But since this is a min heap, we need to rearrange our heap by taking the max
    to the "ROOt" and then shiftDown
    1. Save the "ROOT" number so that we can return it
    2. Pop number in arr and replace "ROOT" number with it
    3. trigger shiftDown() to make a min heap again
    */
    extract(){
        if(this.heap[1]==null) return null;
        var temp= this.heap[1];
        this.heap[1] = this.heap[this.heap.length-1];
        this.heap.pop();
        this.shiftDown();
        return temp;
    }
    shiftDown(i=1){
        if(this.heap[i*2]>this.heap[i*2+1]){
            if (this.heap[i] > this.heap[i*2 +1]){
                var temp= this.heap[i];
                this.heap[i]=this.heap[i*2 +1];
                this.heap[i*2 +1] = temp;
                this.shiftDown(i*2 +1);
            }
        }
        else{
            if (this.heap[i]> this.heap[i*2]){
                var temp= this.heap[i];
                this.heap[i]=this.heap[i*2];
                this.heap[i*2] = temp;
                this.shiftDown(i*2);
            }
        }
        return
    }
    
}

var mHeap = new MinHeap()
mHeap.insert(2)
mHeap.insert(3)
mHeap.insert(7)
mHeap.insert(9)
mHeap.insert(4)
mHeap.insert(1)
mHeap.insert(6)
mHeap.printHorizontalTree();
console.log(mHeap.extract())
mHeap.printHorizontalTree();
// console.log(mHeap.heap)