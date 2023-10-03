let data;

function render_view() {
    data = JSON.parse(document.getElementById("data").innerHTML);

    update_title();
    update_services();
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