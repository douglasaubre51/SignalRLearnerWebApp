let count;
//create connection
var connViewCount = new signalR.HubConnectionBuilder()
    .withUrl("/hubs/userCount")
    .build();

var connUserCount = new signalR.HubConnectionBuilder()
    .withUrl("/hubs/userCount")
    .build();

//notification from hub
connViewCount.on("updateTotalViews", (value) => {
    var newCountH1 = document.getElementById("totalViewsCounter");
    newCountH1.innerHTML = value;

    console.log(value)
});

connUserCount.on("updateUserCounter", (value) => {
    var newUserCountH1 = document.getElementById("totalUserCount");
    newUserCountH1.innerHTML = value;

    console.log(value)
});

//call method on hub from client
function newWindowLoadedOnClient() {
    connViewCount.send("NewWindowLoaded");
}

//start connection
function success() {
    console.log("mission passed!");

    newWindowLoadedOnClient();
}

function failure() {
    console.log("mission failed!");
}

connViewCount.start().then(success, failure);

connUserCount.start().then(success, failure)