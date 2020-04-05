/**
题目：LFU缓存
请你为 最不经常使用（LFU）缓存算法设计并实现数据结构。它应该支持以下操作：get 和 put。

get(key) - 如果键存在于缓存中，则获取键的值（总是正数），否则返回 -1。
put(key, value) - 如果键不存在，请设置或插入值。当缓存达到其容量时，则应该在插入新项之前，使最不经常使用的项无效。在此问题中，当存在平局（即两个或更多个键具有相同使用频率）时，应该去除 最近 最少使用的键。
「项的使用次数」就是自插入该项以来对其调用 get 和 put 函数的次数之和。使用次数会在对应项被移除后置为 0 。

*/
/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.max = capacity;
    this.count = 0;
    this.index = 0;
    this.m = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if(this.m[key]){
        this.m[key].count++;
        this.m[key].index = ++this.index;
        return this.m[key].value;
    }else{
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if(this.max <= 0)return;
    if(this.m[key]){
        this.m[key].value=value;
        this.m[key].count++;
        this.m[key].index = ++this.index;
        return;
    };
    if(this.count >= this.max){
        let minKey, minCount=Infinity, minIndex=Infinity;
        for(let k in this.m){
            if(this.m[k].count < minCount || this.m[k].count == minCount && this.m[k].index < minIndex){
                minKey = k;
                minCount = this.m[k].count;
                minIndex = this.m[k].index;
            }
        }
        delete this.m[minKey];
    }else{
        this.count++;
    }
    this.m[key] = {
        value:value,
        count:1,
        index:++this.index
    }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */