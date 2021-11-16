let secondmax=(inp)=>
{
    
    var max=Math.max(null,inp)
    inp.splice(inp.indexOf(max),2)
        var max=Math.max.apply(null,inp)

console.log(max);
}
    

module.exports.secondmax=secondmax