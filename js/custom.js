$(document).ready(function () {
    $(".disabled").attr("disabled", "disabled");
    $(".hidden").attr("style", "display:none");
    $(".hiddenSpace").attr("disabled", "disabled");
    var sound1 = document.createElement('audio');
    var sound2 = document.createElement('audio');
    sound1.setAttribute('src', 'sounds/klick_sound1.mp3');
    sound2.setAttribute('src', 'sounds/klick_sound2.wav');
    //return !!(sound1.canPlayType && sound1.canPlayType('audio/mpeg;').replace(/no/, ''));
    $('.sound1').click(function() {
        sound1.play();
    });
    $('.sound2').click(function() {
        sound2.play();
    });
});