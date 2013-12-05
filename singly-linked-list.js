function ListNode(data) {
    this.data = data;
    this.next = null;
}

function SinglyLinkedList() {
    this.head   = null;
    this.tail   = null;
    this.length = 0;
}

SinglyLinkedList.prototype.add = function (node) {
    if (this.head === null) {
        this.head = this.tail = node;
    } else {
        this.tail.next = node;
        this.tail = node;
    }
    this.length++;
}

var data = [
    {'fname': 'Anton',    'sname': 'Nizhegorodov'},
    {'fname': 'Dan',      'sname': 'Brown'       },
    {'fname': 'Timothy ', 'sname': 'Olyphant'    },
];

var l = new SinglyLinkedList();
for (i in data) {
    l.add(new ListNode(data[i]));
}
console.log(l);
