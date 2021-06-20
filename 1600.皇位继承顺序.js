/*
 * @lc app=leetcode.cn id=1600 lang=javascript
 *
 * [1600] 皇位继承顺序
 */

// @lc code=start
/**
 * @param {string} kingName
 */
 var ThroneInheritance = function(kingName) {
    this.m = {};
    this.c = {};
    this.d = {};
    this.m[kingName] = "0";
    this.c[kingName] = 0;
};

/**
 * @param {string} parentName
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function(parentName, childName) {
    this.m[childName] = this.m[parentName] + '-' + (this.c[parentName]++);
    this.c[childName] = 0;
};

/**
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function(name) {
    this.d[name] = true;
};

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function() {
    let arr = Object.keys(this.m).filter(key => !this.d[key]).map(key => ({key, val: this.m[key]}));
    arr.sort((a, b) => {
        let av = a.val.split("-"), bv = b.val.split("-");
        let len = Math.min(av.length, bv.length);
        for(let i=0; i<len; i++){
            if(+av[i] != +bv[i]){
                return +(av[i]) - (+bv[i]);
            }
        }
        return false;
    })
    return arr.map(v => v.key);
};

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */
// @lc code=end

