let count;
//create connection
var connUserCount = new signalR.HubConnectionBuilder()
    .withUrl("/hubs/userCount")
    .build();

//notification from hub
connUserCount.on("updateTotalViews", (value) => {
    var newCountH1 = document.getElementById("totalViewsCounter");
    newCountH1.innerHTML = value;

    console.log(value)
});

//call method on hub from client
function newWindowLoadedOnClient() {
    connUserCount.send("NewWindowLoaded");
}

//start connection
function success() {
    console.log("mission passed!");

    newWindowLoadedOnClient();
}

function failure() {
    console.log("mission failed!");
}

connUserCount.start().then(success, failure);