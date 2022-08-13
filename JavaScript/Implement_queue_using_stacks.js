var MyQueue = function() {
    this.q = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.q.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.q.splice(0, 1);
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.q[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.q.length === 0;
};
