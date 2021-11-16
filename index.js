let secondmax=(inp)=>
{
    
    let uniq=[...new Set(inp)]
    let max=Math.max.apply(null,inp)
    console.log(uniq,"uniq")
    uniq.splice(uniq.indexOf(max),1)
     max=Math.max.apply(null,uniq)

console.log(max);
}
    

module.exports.secondmax=secondmax