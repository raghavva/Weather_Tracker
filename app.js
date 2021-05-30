var button=document.querySelector('.button')
var main = document.querySelector('.name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var input = document.querySelector('.input_text');


button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=a24601ea64d4d38a78375e4bbc16736e')
    .then(response=>response.json())
    .then(data=>{
       
        var tempValue = data['main']['temp'];
        var nameValue = data['name'];
        var descValue = data['weather'][0]['description'];

        main.innerHTML=nameValue;
        temp.innerHTML=tempValue-273;
        desc.innerHTML=descValue;
    })

    .catch(err=>("Wrong city!"))
})
