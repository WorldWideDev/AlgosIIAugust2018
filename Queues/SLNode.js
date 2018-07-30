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

        // WE were going down a bad path!!!
        // Heres a possible way we can do this
        
        // 1) init new node with val
        var newNode = new SLNode(val);

        // 2) point tail to new node
        this.tail = newNode;
    

        // 3) add new node to end of list
        
        // first check for empty queue
        if(this.isEmpty()){
            this.head = newNode;
            return this;

        }

        // then traverse to end of queue, add new item at end
        var curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        curr.next = newNode;

        return this;
    }
}

var test = new SLQueue();
test.enqueue(1).enqueue(2);
