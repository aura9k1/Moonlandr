let data;

function render_view() {
    data = JSON.parse(document.getElementById("data").innerHTML);

    update_title();
    update_bg();
    update_services();
    update_automations();
    tick();

    document.getElementById("body").classList.add("show");
}

function update_bg(){
    document.getElementById("body").style.backgroundImage = `url("${data.bgImage}")`;
}

function update_title() {
    document.title = `${data.owner}'s Home`;
    document.getElementById("title").textContent = `${data.owner}'s Home`;
    document.getElementById("title").title = `${data.host}`;
}

function update_automations() {
    if (!data?.automations) return;
    document.getElementById("automations").innerHTML = "";
    for (var i = 0; i < data.automations.length; i++) {
        document.getElementById("automations").innerHTML += `
        <div class="card" onclick="window.open('${data.automations[i].url}')">
            <h3>${data.automations[i].name}</h3>
        </div>`
    }
}

function update_services() {
    if (!data?.services) return;
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