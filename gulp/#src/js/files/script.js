let popup = document.getElementById('mainpopup'),
    popupToggle = document.querySelector('.popup__button'),
    popupClose = document.querySelector('.popup__close');

    popupToggle.onclick = function() {
        popup.style.display="block";
    };
    popupClose.onclick = function() {
        popup.style.display="none";
    };

    window.onclick = function (event) {
        if(event.target == popup) {
            popup.style.display="none";
        }
    };

var telInput = document.querySelectorAll('input[type="tel"]');

for (var i = 0; i < telInput.length; i++) {
    telInput[i].oninput = function () {
    dpcm(this);
    };
}