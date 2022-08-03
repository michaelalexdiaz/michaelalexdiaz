var searchBtn = document.querySelector("button");
var cityName = document.querySelector('textarea');
var city = document.querySelector('.city');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity =  document.querySelector('.humidity');
var day2= document.querySelector('.day2');
var day3= document.querySelector('.day3');
var day4= document.querySelector('.day4');
var day5= document.querySelector('.day5');
var day6= document.querySelector('.day6');
var temp2= document.querySelector('.temp2');
var temp3= document.querySelector('.temp3');
var temp4= document.querySelector('.temp4');
var temp5= document.querySelector('.temp5');
var temp6= document.querySelector('.temp6');
var wind2 = document.querySelector('.wind2');
var wind3 = document.querySelector('.wind3');
var wind4 = document.querySelector('.wind4');
var wind5 = document.querySelector('.wind5');
var wind6 = document.querySelector('.wind6');
var humidity2 =  document.querySelector('.humidity2');
var humidity3 =  document.querySelector('.humidity3');
var humidity4 =  document.querySelector('.humidity4');
var humidity5 =  document.querySelector('.humidity5');
var humidity6 =  document.querySelector('.humidity6');

searchBtn.addEventListener('click',function(name){
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+cityName.value+'&units=imperial&exclude=hourly&appid=9cada9e4b2a43ad9ea64e04df98d21b0')
    
    .then(response => response.json())
    .then(data => {
        const d = new Date();
        var nameValue = data['city']['name'];
        var dateValue = d.getMonth() + '/' + d.getDate() + '/' + d.getFullYear();
        var tempValue = data['list'][0]['main']['temp'] + '°';
        var windValue = data['list'][0]['wind']['speed'] + 'MPH';
        var humValue = data['list'][0]['main']['humidity'] + '%';
        var dateValue2 = data['list'][8]['dt_txt'];
        var dateValue3 = data['list'][15]['dt_txt'];
        var dateValue4 = data['list'][23]['dt_txt'];
        var dateValue5 = data['list'][31]['dt_txt'];
        var dateValue6 = data['list'][39]['dt_txt'];
        var tempValue2 = data['list'][8]['main']['temp'] + '°';
        var tempValue3 = data['list'][15]['main']['temp'] + '°';
        var tempValue4 = data['list'][23]['main']['temp'] + '°';
        var tempValue5 = data['list'][31]['main']['temp'] + '°';
        var tempValue6 = data['list'][39]['main']['temp'] + '°';
        var windValue2 = data['list'][8]['wind']['speed'] + 'MPH';
        var windValue3 = data['list'][15]['wind']['speed'] + 'MPH';
        var windValue4 = data['list'][23]['wind']['speed'] + 'MPH';
        var windValue5 = data['list'][31]['wind']['speed'] + 'MPH';
        var windValue6 = data['list'][39]['wind']['speed'] + 'MPH';
        var humValue2 = data['list'][8]['main']['humidity'] + '%';
        var humValue3 = data['list'][15]['main']['humidity'] + '%';
        var humValue4 = data['list'][23]['main']['humidity'] + '%';
        var humValue5 = data['list'][31]['main']['humidity'] + '%';
        var humValue6 = data['list'][39]['main']['humidity'] + '%';
          city.innerHTML = nameValue + ' ' + dateValue;
          temp.innerHTML = tempValue;
          wind.innerHTML = windValue;
	      humidity.innerHTML = humValue;
          day2.innerHTML = dateValue2;
          day3.innerHTML = dateValue3;
          day4.innerHTML = dateValue4;
          day5.innerHTML = dateValue5;
          day6.innerHTML = dateValue6;
          temp2.innerHTML = tempValue2;
          temp3.innerHTML = tempValue3;
          temp4.innerHTML = tempValue4;
          temp5.innerHTML = tempValue5;
          temp6.innerHTML = tempValue6;
          wind2.innerHTML = windValue2;
          wind3.innerHTML = windValue3;
          wind4.innerHTML = windValue4;
          wind5.innerHTML = windValue5;
          wind6.innerHTML = windValue6;
          humidity2.innerHTML = humValue2;
          humidity3.innerHTML = humValue3;
          humidity4.innerHTML = humValue4;
          humidity5.innerHTML = humValue5;
          humidity6.innerHTML = humValue6;
        })
})


