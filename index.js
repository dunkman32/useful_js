const isSeven = number => parseInt(number) === 7;

const print = message => console.log(message);

const printTwo = () => print('2');

const isPositive = number => parseFloat(number) > 0;

const isNegative = number => parseFloat(number) < 0;

const _5k = name => name === "mate";

const yourLocalHostAddress = () => "http://127.0.0.1/"

const print99Snowflake = () => {
    for (var i = 0; i < 99; ++i)
        print('*')
}

const print99SnowflakeHorizontal = () =>
    print("***************************************************************************************************");

const returnSuccess = something => 200

const return200 = something => returnSuccess

const meaningOfRecursion = () => "https://www.google.com/search?sxsrf=ACYBGNSS6YyDj723kR3ixNiNzJUfe7VIcw:1572001898777&q=recursion&spell=1&sa=X&ved=0ahUKEwjO4Yy2o7flAhVmxaYKHZnzAdMQBQgtKAA&biw=1366&bih=640"

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
    return200,
    yourLocalHostAddress,
    meaningOfRecursion,
}