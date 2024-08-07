var request = new XMLHttpRequest();
request.open("get","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);
 
 for(var i=0;i<result.length;i++)
     console.log(result[i].name.common);

 for(var i=0;i<result.length;i++)
    console.log(result[i].capital,result[i].region);
}

