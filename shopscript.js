function buyFatHawk() {
    var button = document.getElementById('buyfathawk');
    button.innerHTML="Equip";
    button.setAttribute("onClick", "javascript: equipFatHawk();");
    document.getElementById('pricefat').innerHTML = ("Owned");
}

function buySmallHawk() {
    var button = document.getElementById('buysmallhawk');
    button.innerHTML="Equip";
    button.setAttribute("onClick", "javascript: equipFatHawk();");
    document.getElementById('pricesmall').innerHTML = ("Owned");
}

function equipDefault() {
    alert("work")
}

function equipFatHawk() {
    alert("work")
}

function equipSmallHawk() {
    alert("work")
}