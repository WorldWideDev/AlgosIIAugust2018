function SLNode(value){
    this.value = value;
    this.next = null;
}

function Song(title, artist){
    this.title = title;
    this.artist = artist;
}

function SLStack(){
    this.head = null;
    this.isEmpty = function(){
        return this.head === null;
    }
    this.hasOne = function(){
        return (!this.isEmpty()) && this.head.next == null;
    }
}
function SLQueue(){
    this.head = null;
    this.tail = null;
    this.isEmpty = function(){
        return this.head === null;
    }
    this.hasOne = function(){
        return (!this.isEmpty()) && this.head.next == null;
    }
   
}

SLQueue.prototype.enqueue = function(val){
    
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

SLQueue.prototype.dequeue = function(val){
    // which node to remove? the first one!

    // return -1 if empty
    if(this.isEmpty())
        return -1;

    // get value for later
    var valToReturn = this.head.value;

    // what if only one?
    if(this.hasOne()) {
        this.head = null;
        this.tail = null;
        return valToReturn;
    }
    
    this.head = this.head.next;
    return valToReturn;

}
SLStack.prototype.push = function(val){
    var newNode = new SLNode(val);

    // if(this.isEmpty()){
    //     this.head = newNode;
    //     return;
    // }

    // address pointer of new node
    newNode.next = this.head;

    this.head = newNode;
    return this;

}

SLStack.prototype.pop = function(){
    if(this.isEmpty())
        return -1;

    var valToReturn = this.head.value;

    this.head = this.head.next;
    return valToReturn;
}

var test = new SLStack();
