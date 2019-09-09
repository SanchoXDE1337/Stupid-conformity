const jar = {};

Object.defineProperties(jar, {
    "numberOfCookies": {
        value: 0,
        configurable: true
    },
    "cookies": {
        get() {
            return this.numberOfCookies;
        },
        set(value) {
            if(value > 0 && value <= 5) {
                Object.defineProperty(this,"numberOfCookies", {value});
            }
            else {
                console.error("Количество печенек должно быть меньше 5 и больше 0");
            }
        }, enumerable: true
    }
});

console.log(jar.cookies);
jar.cookies = 5;
console.log(jar.cookies);