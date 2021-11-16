let secondmax=(inp)=>
{
    
    let max=Math.max.apply(null,inp)
    inp.splice(inp.indexOf(max),1)
         max=Math.max.apply(null,inp)

console.log(max);
}
    

module.exports.secondmax=secondmax