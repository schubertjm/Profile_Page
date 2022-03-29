//Connection Requests functoinality
var countConReq = document.querySelector("#numConReq").value;
var countYourCon = document.querySelector("#numYourCon").value;

function acceptConnectionRequest1() {
    countConReq--;
    countYourCon++;
    document.querySelector("#numConReq").value = countConReq;
    document.querySelector("#numYourCon").value = countYourCon;
    document.querySelector("#conReq1").remove();
    document.querySelector("#yourCon5").style.display = "flex";
}

function rejectConnectionRequest1() {
    countConReq--;
    document.querySelector("#numConReq").value = countConReq;
    document.querySelector("#conReq1").remove();
}

function acceptConnectionRequest2() {
    countConReq--;
    countYourCon++;
    document.querySelector("#numConReq").value = countConReq;
    document.querySelector("#numYourCon").value = countYourCon;
    document.querySelector("#conReq2").remove();
    document.querySelector("#yourCon6").style.display = "flex";
}

function rejectConnectionRequest2() {
    countConReq--;
    document.querySelector("#numConReq").value = countConReq;
    document.querySelector("#conReq2").remove();
}

//change Name
function showNameChange () {
    document.querySelector("#new_name_label").style.display = "flex";
    document.querySelector("#new_name_input").style.display = "flex";
    document.querySelector("#update_name_btn").style.display = "flex";
}

var newNameInput = document.querySelector("#new_name_input");

function newName () {
    console.log (newNameInput.value);
    document.querySelector("#profile_name").innerHTML = newNameInput.value;
    console.log (document.querySelector("#profile_name").innerHTML);
}