/*
 * @Author: shixiongfei 
 * @Date: 2018-06-13 00:15:55 
 * @Last Modified by:   shixiongfei 
 * @Last Modified time: 2018-06-13 00:15:55 
 */

const tco = (f) => {
    let value;
    let active = false;
    let accumulated = [];

    return (...args) => {
        accumulated.push(args);
        if (!active) {
            active = true
            while (accumulated.length)
                value = f.apply(this, accumulated.shift());
            active = false;
            return value;
        }
    };
}

const sum = tco((a, b) => {
    if (b > 0) return sum(a + 1, b - 1);
    else return a;
});

console.log(sum(1, 10000000));
