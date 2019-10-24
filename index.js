const isSeven = number => parseInt(number) === 7;

const print = message => console.log(message);

const printTwo = () => print('2');

const isPositive = number => parseFloat(number) > 0;

const isNegative = number => parseFloat(number) < 0;

const _5k = name => name === "mate";

const print99Snowflake = () => {
    for (var i = 0; i < 99; ++i)
        print('*')
}

const print99SnowflakeHorizontal = () =>
    print("***************************************************************************************************");

const returnSuccess = something => 200

const return200 = something => returnSuccess

module.exports = {
    isSeven,
    print,
    isPositive,
    isNegative,
    printTwo,
    _5k,
    print99Snowflake,
    print99SnowflakeHorizontal,
    returnSuccess,
    return200
}