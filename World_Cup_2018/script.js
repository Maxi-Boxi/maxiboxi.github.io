var detailsOpen = document.getElementsByTagName('details');

for (var i =0; i < detailsOpen.length; i++){
    detailsOpen[i].setAttribute("open", "open");
}


/*---links to google----*/

var tableNum = document.querySelectorAll('details table'),
    nameTeam = document.querySelectorAll('details table tr:nth-of-type(2) td'),
    nameTeam2 = document.querySelectorAll('details table tr:nth-of-type(3) td');
for (var x = 0; x < tableNum.length; x++) {
    var getNaTeClass = nameTeam[x].getAttribute('class'),
        getNaTeClass2 = nameTeam2[x].getAttribute('class'),
        nT = '+national+team+';
    tableNum[x].setAttribute("onClick", "window.open('https://www.google.com/search?q=" + getNaTeClass.split(' ')[1] +nT +"+vs+" + getNaTeClass2.split(' ')[1]+nT + "+FIFA+2018')");
}

/*---links to google play-off----*/

var getPlofCon = document.querySelectorAll('.play_off'),
    getPlofTd1 = document.querySelectorAll('.play_off tr:nth-of-type(2) td:nth-of-type(1)'),
    getPlofTd2 = document.querySelectorAll('.play_off tr:nth-of-type(3) td:nth-of-type(1)');
for (var p = 0; p < getPlofCon.length; p++) {
    var PlofTd1Class = getPlofTd1[p].getAttribute('class'),
        PlofTd2Class = getPlofTd2[p].getAttribute('class');
    getPlofCon[p].setAttribute("onClick", "window.open('https://www.google.com/search?q=" + PlofTd1Class.split(' ')[1] +nT +"+vs+" + PlofTd2Class.split(' ')[1]+nT + "+FIFA+2018')");
}

/*---details open and close by width----*/

var handleMatchMedia = function (mediaQuery) {
        for (var i =0; i < detailsOpen.length; i++)
        if (mediaQuery.matches) {
            detailsOpen[i].removeAttribute("open");
        } else {
            detailsOpen[i].setAttribute("open", "open");
        }
    },
    autoOpen = window.matchMedia('all and (max-width: 1000px)');

handleMatchMedia(autoOpen);
autoOpen.addListener(handleMatchMedia);

/*--open details by click--*/

var tableNa = [].slice.call(document.querySelectorAll('div.group'));

tableNa.forEach(function (element, z) {

    element.addEventListener('click', function () {
        detailsOpen[z].setAttribute("open", "open");
        });
});


/*---anchor links --*/

var tableNum2 = document.querySelectorAll('div.group table'),
    upperGet = document.querySelectorAll('.upper');
for (var y = 0; y < tableNum2.length; y++) {
    var tableId = detailsOpen[y].getAttribute('id'),
        tableId2 = tableNa[y].getAttribute('id');
    tableNum2[y].setAttribute("onClick", "document.location='#" + tableId + "'");
    upperGet[y].setAttribute("onClick", "document.location='#" + tableId2 + "'");
}

/*--plus and minus--*/

var minusGet = document.getElementById('minus'),
    plusGet = document.getElementById('plus');
    minusGet.onclick = function myFunction() {
        for (var u =0; u < detailsOpen.length; u++) {
            detailsOpen[u].setAttribute("open", "");
            }
};
    plusGet.onclick = function myPlus() {
    for (var p =0; p < detailsOpen.length; p++) {
        detailsOpen[p].removeAttribute("open");
    }
};

/*----------Tabs----------*/


var tab1Get = document.getElementById('tab_1'),
    tab2Get = document.getElementById('tab_2'),
    playOff = document.getElementById('playoff_container'),
    matContGet = document.getElementById('matches_container');
    tab2Get.onclick = function tab2Function() {
        matContGet.classList.add("hidden");
        playOff.classList.remove("hidden");
          tab2Get.classList.add("underline");
          tab1Get.classList.remove("underline");
};

    tab1Get.onclick = function tab1Function() {
        playOff.classList.add("hidden");
        matContGet.classList.remove("hidden");
        tab1Get.classList.add("underline");
        tab2Get.classList.remove("underline");
};












