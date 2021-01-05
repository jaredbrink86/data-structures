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
       if(this.values.length > 0) {
           this.values[0] = end;
           this.sinkDown();
        }
        return max
    }
    sinkDown() {
        let idx = 0;
        let element = this.values[0];
        let leftChild, rightChild
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            leftChild = this.values[leftChildIdx]
            rightChild = this.values[rightChildIdx]
            if(leftChild > element && leftChild > rightChild) {
                this.values[idx] = leftChild;
                this.values[leftChildIdx] = element;
                idx = leftChildIdx
                element = this.values[leftChildIndx]
            }
            if(rightChild > element && rightChild > leftChild) {
                this.values[idx] = rightChild
                this.values[rightChild] = element;
                idx = rightChildIdx
                element = this.values[rightChildIdx]
            }
            if((rightChild < element && leftChild < element) || (leftChild === undefined && rightChild === undefined)) break;
        }
    }
}

[4,89,76,65,54,33,11,23]

100