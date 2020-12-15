class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(val) {
        this.values.push(val)
        let valIndex = this.values.length - 1
        let parentIndex = Math.floor((valIndex - 1) / 2)
        let temp;
        while(this.values[parentIndex] < this.values[valIndex]){
            temp = this.values[valIndex]
            this.values[valIndex] = this.values[parentIndex]
            this.values[parentIndex] = temp
        }
        return this.values
    }
}

