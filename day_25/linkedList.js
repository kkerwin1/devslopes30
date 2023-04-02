class Element {
    constructor(value, linkedList) {
        this.value = value;
        this.linkedList = linkedList;
        this.nextElement = undefined;
    }

    link(nextElement) {
        this.nextElement = nextElement;
    }
}

class LinkedList {
    constructor(array=undefined) {
        this.elementDictionary = {};
        this.itemList = [];

        // this.done is necessary to make data type an iterator.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
        this.done = false;
        this.currentIndex = -1;

        if (array !== undefined) {
            for (let item of array) {this.add(item)};
        }
    }

    add(item) {
        let element = new Element(item, this);
        this.itemList.push(item);
        this.elementDictionary[item] = element;
        this.link();
    }

    remove(item) {
        delete this.elementDictionary[item];
        let index = this.findItemIndex(item);
        this.itemList.splice(index, 1);
        this.link(index);
    }

    clear() {
        this.elementDictionary = {};
        this.itemList = [];
    }

    link(index=undefined) {
        let element = undefined;
        let nextIndex = undefined;
        let nextItem = undefined;
        let nextElement = undefined;
        let item = undefined;

        if (index === undefined) {
            for (item of this.itemList) {
                element = this.elementDictionary[item];
                nextIndex = this.findItemIndex(item) + 1;
                if (nextIndex + 1 < this.itemList.length) {
                    nextItem = this.itemList[nextIndex];
                    nextElement = this.elementDictionary[nextItem];
                    element.link(nextElement);
                }
            }

        } else {
            item = this.itemList[index];
            element = this.elementDictionary[item]
            nextIndex = index++;
            if (nextIndex + 1 < this.itemList.length) {
                nextItem = this.itemList[nextIndex];
                nextElement = this.elementDictionary[nextItem];
                element.link(nextElement);
            }
        }
    }

    next() {
        this.currentIndex++;
        let item = this.itemList[this.currentIndex];
        let element = this.elementDictionary[item];

        try {
            let nextElement = element.nextElement;
            if (nextElement === undefined) {this.done = true};
            return nextElement.value;
        } catch(TypeError) {
            this.done = true;
            return undefined;
        }
    }

    findItemIndex(item) {
        const itemIndex = (element) => element === item;
        const index = this.itemList.findIndex(itemIndex);
        return index;
    }
}

// Tests
let linkedList1 = new LinkedList([1, 2, 3, 4, 5]);
console.log(linkedList1.itemList);
linkedList1.remove(3);
console.log(linkedList1.itemList);
console.log(linkedList1.next());
console.log(linkedList1.next());
console.log(linkedList1.next());
console.log(linkedList1.next());
console.log(linkedList1.next());

let linkedList2 = new LinkedList();
linkedList2.add("a");
linkedList2.add("b");
linkedList2.add("c");
console.log(linkedList2.itemList);
linkedList2.clear();
console.log(linkedList2.itemList);