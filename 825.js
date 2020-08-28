// TUE
// MIN HEAP
/*
    PARENT LOCAITON = Math.floor(i / 2)
    LEFT CHILD = i * 2
    RIGHT CHILD = (i * 2) + 1
*/
/*
    Inserting a new value in to the heap requires you to push
    the value to the back of the array and then shiftUp, the value
    to the correct index

*/
// [ null,  ]
class MinHeap{
    constructor(){
        this.heap = [];
    }


    insert(value){
        this.heap.push(value)
        this.shiftUp()

    }
    shiftUp(){
        var index = this.heaps.length - 1;
        while(index > 1){
            var parentInd = Math.floor(index / 2)
            if( this.heap[parentInd] < this.heap[index] ){
                break
            }
            var temp = this.heap[index]
            this.heap[index] = this.heap[parentInd]
            this.heap[parentInd] = temp
    
            index = parentInd
        }
    }
}