class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total
    }

    set(key, val) {
        const hash = this._hash(key);
        if(!this[hash]) {
            this[hash] = [key, val]
        } else {
            
        }
    }
    get(key) {
        const hash = this._hash(key);
        for(let i = 0; i < this[hash].length; i++) {
            if(this[hash][0] === key) {
                return this[hash][1]
            }
        }
    }
}
