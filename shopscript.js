let fatHawkOwned = false;
let smallHawkOwned = false;
let equippedHawk = 'default';

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

function equipDefault() {
    equippedHawk = 'default';
    updateUI();
}

function equipFatHawk() {
    if (fatHawkOwned) {
        equippedHawk = 'fat';
        updateUI();
    }
}

function equipSmallHawk() {
    if (smallHawkOwned) {
        equippedHawk = 'small';
        updateUI();
    }
}

function updateUI() {
    document.getElementById('pricedefault').innerHTML = equippedHawk === 'default' ? "Equipped" : "Owned";
    document.getElementById('pricefat').innerHTML = equippedHawk === 'fat' ? "Equipped" : (fatHawkOwned ? "Owned" : "Price: 30 tokens");
    document.getElementById('pricesmall').innerHTML = equippedHawk === 'small' ? "Equipped" : (smallHawkOwned ? "Owned" : "Price: 50 tokens");
}
