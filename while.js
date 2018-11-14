console.log("1==============");
var num = -10;
while(num < 20)
{
    console.log(num);
    num++;
}

console.log("2==============");
num = 10;
while(num <= 40)
{
    if(num % 2 === 0)
    {
        console.log(num);
    }
    num++;
}

console.log("3==============");
num = 301;
while(num <= 333)
{
    console.log(num);
    num+=2;
}

console.log("4==============");
num = 5;
while(num < 50)
{
    if((num % 5 === 0) && (num % 3 === 0))
    {
        console.log(num);
    }
    num++;
}