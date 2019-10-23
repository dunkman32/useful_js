
# install
  ```
  $ npm i --save npm_useful_js
  ```

## in nodeJS!
```
    const {
        isSeven,
        print,
        printTwo,
        isPositive,
        isNegative,
        _5k,
        print99Snowflake,
        print99SnowflakeHorizontal
    } = require("npm_useful_js");
    
    print(isSeven(10)) // false
    print(isSeven(7)) // true

    printTwo() // print 2 in console

    isPositive(5) // true
    isNegative(-5) // true
    
    _5k("nozza") // false
    _5k("mate") // true

    print99Snowflake() // vertical printing
    print99SnowflakeHorizontal() // Horizontal printing
    
```