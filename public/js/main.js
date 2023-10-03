let data;

function render_view() {
    data = JSON.parse(document.getElementById("data").innerHTML);

    update_title();
    update_services();

    update_weather();
    tick();
}

function update_title() {
    document.title = `${data.owner}'s Home`;
    document.getElementById("title").textContent = `${data.owner}'s Home`;
    document.getElementById("title").title = `${data.host}`;
}

function update_services() {
    document.getElementById("services").innerHTML = "";
    for (var i = 0; i < data.services.length; i++) {
        document.getElementById("services").innerHTML += `
        <div class="card" onclick="window.open('${data.services[i].url}')">
            <h3>${data.services[i].name}</h3>
        </div>`
    }
}

function update_weather() {
    console.log(navigator.geolocation.getCurrentPosition(showPosition));

}

function showPosition(position) {
    console.log(
        "Latitude: " + position.coords.latitude +
        "Longitude: " + position.coords.longitude);

        let url = `https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&current_weather=true`;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data)
                document.getElementById("weather").innerHTML = `
                ${data.current_weather.temperature}<sup>${data.current_weather_units.temperature}</sup>`;
            })

}

function tick(){
    let ts = new Date(Date.now());
    let days = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];
    let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    document.getElementById("timestamp").innerHTML = `${days[ts.getDay()]} ${ts.getDate()} ${months[ts.getMonth()]} ${ts.getFullYear()}<br>
    <span class="min">${pad_hm(ts.getHours())}:${pad_hm(ts.getMinutes())}</span>
    `
}

function pad_hm(i){
    if (i < 10) return "0" + i;
    return i;
}
//