
# install
  ```
  $ npm i --save npm_useful_js
  ```

## in nodeJS!
```
    const {
        isSeven,
        tryCatch,
        hashPassword,
        checkPassword,
        print,
        printTwo,
        isPositive,
        isNegative,
        _5k,
        print99Snowflake,
        print99SnowflakeHorizontal
    } = require("npm_useful_js");
    
    // code without try{...}catch(e){...}
    router.get('/',
     tryCatch(async (req, res) => {
        const tmpObjectsArrat = await tmpSchema.find();
        ...
        return res.send(tmpObjectsArrat);
    }));

    checkPassword(password, user.password) // true or false

    hashPassword(password, salt) // returns bcrypt type

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