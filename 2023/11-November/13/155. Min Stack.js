let queue = [];    

var MinStack = function() {
    queue = [];    
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    
    if(queue.length === 0){
        queue.push([val,val]);
    }
    else{
        queue.push([val,Math.min(val,queue[queue.length-1][1])]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    queue.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return queue[queue.length-1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return queue[queue.length-1][1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */