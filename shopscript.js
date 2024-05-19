function buyFatHawk() {
    var button = document.getElementById('buyfathawk');
    button.innerHTML="Equip";
    button.setAttribute("onClick", "javascript: equipFatHawk();");
    document.getElementById('pricefat').innerHTML = ("Owned");
    return True;
}

function buySmallHawk() {
    var button = document.getElementById('buysmallhawk');
    button.innerHTML="Equip";
    button.setAttribute("onClick", "javascript: equipFatHawk();");
    document.getElementById('pricesmall').innerHTML = ("Owned");
    return True;
}

function equipDefault() {
    //document.getElementById('pricedefault').innerHTML = ("Equipped");
    //document.getElementById('pricefat').innerHTML = ("Owned");
    //document.getElementById('pricesmall').innerHTML = ("Owned");
}

function equipFatHawk() {
    //document.getElementById('pricedefault').innerHTML = ("Owned");
    //document.getElementById('pricefat').innerHTML = ("Equipped");
    //document.getElementById('pricesmall').innerHTML = ("Owned");
}

function equipSmallHawk() {
    //document.getElementById('pricedefault').innerHTML = ("Owned");
    //document.getElementById('pricefat').innerHTML = ("Owned");
    //document.getElementById('pricesmall').innerHTML = ("Equipped");
}
