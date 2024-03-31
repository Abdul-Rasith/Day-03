// use the same rest countries and print all countries 
// names, regions, sub-region and populations
let req = new XMLHttpRequest();

req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload = function(){
    let result = JSON.parse(req.response)
   console.log(result)
for (var i=0; i<result.length; i++){
    console.log(result[i].name.common)
    console.log(result[i].region+" "+result[i].subregion)
    console.log(result[i].population)
    
}
}