class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(val) {
        this.values.push(val);
        let valIndex = this.values.length - 1;
        let parentIndex = Math.floor((valIndex - 1) / 2);
        let temp;
        let tempIndex;
        while(this.values[parentIndex] < this.values[valIndex]){
            temp = this.values[valIndex];
            this.values[valIndex] = this.values[parentIndex];
            this.values[parentIndex] = temp;
            tempIndex = valIndex;
            valIndex = parentIndex;
            parentIndex = valIndex;
        }
        return this.values
    }
    extractMax() {
       const max = this.values[0];
       const end = this.values.pop();
       this.values[0] = end;
       this.sinkDown();
       return max
    }
    sinkDown() {
        let idx = 0
        const length = this.values.lengtht
        const element = this.values[0];
        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(leftChild > element) {
                    swap = leftChildIdx
                }
            } 
            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if(
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > LeftChild)) {
                    
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

