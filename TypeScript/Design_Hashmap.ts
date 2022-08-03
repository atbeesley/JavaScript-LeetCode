class MyHashMap {
    
    private map;
    
    constructor() { 
        this.map = {};
    }
    
    put(key: number, value: number): void {
        this.map[key] = value;
    }

    get(key: number): number {
        if(this.map.hasOwnProperty(key)){
            return this.map[key];
        } else {
            return -1;
        }
    }

    remove(key: number): void {
        delete this.map[key];
    }
}