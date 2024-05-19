let fatHawkOwned = false;
let smallHawkOwned = false;
let equippedHawk = 'default';

var defaultEquip = true;
var fatEquip = false;
var smallEquip = false;

function buyFatHawk() {
    if (!fatHawkOwned) {
        fatHawkOwned = true;
        document.getElementById('buyfathawk').innerHTML = "Equip";
        document.getElementById('pricefat').innerHTML = "Owned";
        document.getElementById('buyfathawk').setAttribute("onClick", "equipFatHawk()");
    }
}

function buySmallHawk() {
    if (!smallHawkOwned) {
        smallHawkOwned = true;
        document.getElementById('buysmallhawk').innerHTML = "Equip";
        document.getElementById('pricesmall').innerHTML = "Owned";
        document.getElementById('buysmallhawk').setAttribute("onClick", "equipSmallHawk()");
    }
}

function equipDefaultHawk() {
    defaultEquip = true;
    smallEquip = false;
    fatEquip = false;
    equippedHawk = 'default';
    updateUI();
}

function equipFatHawk() {
    if (fatHawkOwned) {
        fatEquip = true;
        smallEquip = false;
        defaultEquip = false;
        equippedHawk = 'fat';
        updateUI();
    }
}

function equipSmallHawk() {
    if (smallHawkOwned) {
        smallEquip = true;
        fatEquip = false;
        defaultEquip = false;
        equippedHawk = 'small';
        updateUI();
    }
}

function updateUI() {
    document.getElementById('pricedefault').innerHTML = equippedHawk === 'default' ? "Equipped" : "Owned";
    document.getElementById('pricefat').innerHTML = equippedHawk === 'fat' ? "Equipped" : (fatHawkOwned ? "Owned" : "Price: 30 tokens");
    document.getElementById('pricesmall').innerHTML = equippedHawk === 'small' ? "Equipped" : (smallHawkOwned ? "Owned" : "Price: 50 tokens");
}
