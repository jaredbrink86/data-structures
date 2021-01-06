class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(val) {
        this.values.push(val);
        this.bubbleUp()
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx]
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx]
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    extractMax() {
       const max = this.values[0];
       const end = this.values.pop();
       this.values[0] = end;
       this.sinkDown();
       return max;
    }
    sinkDown() {
        let idx = 0;
        let element = this.values[0];
        let leftChild, rightChild, leftChildIdx, rightChildIdx
        while(true) {
            leftChildIdx = 2 * idx + 1
            rightChildIdx = 2 * idx + 2
            leftChild = this.values[leftChildIdx]
            rightChild = this.values[rightChildIdx]
            if(rightChild > element && rightChild > leftChild && rightChild !== undefined) {
                this.values[idx] = rightChild
                this.values[rightChildIdx] = element
                idx = rightChildIdx
                element = this.values[idx]
            } else if(leftChild > element && leftChild > rightChild && leftChild !== undefined) {
                this.values[idx] = leftChild
                this.values[leftChildIdx] = element
                idx = leftChildIdx
                element = this.values[idx]
            } else break;
        }   
    }
}
