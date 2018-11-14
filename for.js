console.log("==========1==========");
for(var i = -10; i <= 19; i++)
{
    console.log(i);
}

console.log("==========2==========");
for(var i = 10; i <= 40; i+=2)
{
    if(i %2 === 0)
    {
        console.log(i);
    }
}

console.log("==========3==========");
for(var i = 301; i <= 333; i+=2)
{
    if(i %2 !== 0)
    {
        console.log(i);
    }
}

console.log("==========4==========");
for(var i = 5; i <= 50; i++)
{
    if((i % 5 === 0) && (i % 3 === 0))
    {
        console.log(i);
    }
}