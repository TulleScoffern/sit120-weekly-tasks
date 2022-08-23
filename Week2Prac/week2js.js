getDate = ()=>{
    document.getElementById('date').innerHTML = Date();
};


getID = ()=>{
    document.getElementById("randomUserId").innerHTML =
    Math.floor(Math.random() * 10000) + 1;
}