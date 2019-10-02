class MyMap<T> {
    private map: {[key:string]:T } = {}

    setItem(key:string, item:T){
        this.map[key] = item;
    }//setItem

    getItem(key:string) {
        return this.map[key];
    }

    clear() {
        this.map = {}
    }

    printMap(){
        for (let key in this.map) {
            console.log(key, this.map[key]);
            
        }
    }
}//MyMap

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 10)
numberMap.setItem('bananas', 2)

console.log(numberMap.getItem('apples'));
console.log(numberMap.getItem('bananas'));

const stringMap = new MyMap<string>();
stringMap.setItem('apples', "apple")
stringMap.setItem('bananas', "banana")

console.log(stringMap.getItem('apples'));
console.log(stringMap.getItem('bananas'));



