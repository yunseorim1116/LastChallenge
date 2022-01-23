const API_KEY = "e49f201c7c739552c694b33a291f484b";

function onGeoOk(position){ //얘도 e 객체처럼 자스에서 제공하는거
    const lat = position.coords.latitude; //coords도 마찬가지
    const lon = position.coords.longitude;
    console.log("you live it",lat,lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url).then((response) => response.json()) //response에 모든 json객체를 얻어옴
            .then((data)=> {
                console.log(data);
                const city = document.querySelector("#weather span:first-child");//weather span의 첫번째 child를 얻어요
                const weather= document.querySelector("#weather span:last-child");
                const name = data.name;
                
                city.innerText = data.name;
                weather.innerText = data.weather[0].main;
                
                
        
        //weather 는 array래 ... 
    })
   
    
}

function onGeoError(){
alert("Can't find you. No weather for you.");

}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);