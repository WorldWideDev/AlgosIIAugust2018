function SLNode(value){
    this.value = value;
    this.next = null;
}


function SLQueue(){
    this.head = null;
    this.tail = null;
    this.isEmpty = function(){
        return this.head === null;
    }
    this.enqueue = function(val){
        // 1) init new node with val
        var newNode = new SLNode(val);

        // 2) point current tail.next to new node
        if(!this.isEmpty){
            this.tail.next = newNode;
            if(this.head.next === null)
                this.head.next = newNode;
        }
        else {
            this.head = newNode;
        }

        // 3) point tail to new node
        this.tail = newNode;

        return this;
    }
}


