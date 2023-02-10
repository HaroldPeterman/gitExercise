const memeForm = document.querySelector('#meme-form');
const memeContainer = document.querySelector('.container');
const imgURL = document.querySelector('#link-input');
const topTextInput = document.querySelector('#top-text');
const bottomTextInput = document.querySelector('#bottom-text');
const memes = document.querySelector('#memes');
const formInputs = document.querySelector('.form-input');
const submitbutton = document.querySelector('#submit-button');
const toggleSwitch = document.querySelector('input[type="checkbox"]')

toggleSwitch.addEventListener('click', function(e) {
    // darkMode();
    document.body.className = toggleSwitch.checked ? 'dark': ''
});
// function darkMode() {
//     var body = document.querySelector('body');
//     body.classList.toggle('dark-mode');
// }

function clearInput(){
    var getValue= document.getElementById("link-input");
      if (getValue.value !="") {
          getValue.value = "";
      }

      var getValue= document.getElementById("top-text");
      if (getValue.value !="") {
          getValue.value = "";
      }

      var getValue= document.getElementById("bottom-text");
      if (getValue.value !="") {
          getValue.value = "";
      }

};

memeForm.addEventListener('submit', function(e) {
    e.preventDefault();
    newContainer();
    clearInput();
});

function remove(e) {
    e.remove();
}

function newContainer() {
    const newcontainers = document.createElement('div');
    newcontainers.classList.add('container')
    newcontainers.setAttribute('onclick','remove(this)');
    
    function newPicture (url) {
        const newimg = document.createElement('img')
        newimg.src = url.value;
        newimg.className = 'pictures';
        newcontainers.prepend(newimg);
    }
    
    function topText(input) {
        const newTopText = document.createElement('div');
        newTopText.className = 'top';
        newTopText.innerText = input.value;
        // return newTopText;
        newcontainers.append(newTopText);
    }

    function bottomText(input) {
        const newBottomText = document.createElement('div');
        newBottomText.className = 'bottom';
        newBottomText.innerText = input.value;
        newcontainers.append(newBottomText); 
    }

    function createOverlay() {
        const newOverlay = document.createElement('div');
        newOverlay.className = 'overlay';
        const span = document.createElement('span');
        span.innerHTML = '<img src="https://static.vecteezy.com/system/resources/thumbnails/010/892/332/small/x-transparent-free-png.png" alt=""></img>';
        newOverlay.append(span);
        newcontainers.append(newOverlay);
    }
    newPicture(imgURL);
    topText(topTextInput);
    bottomText(bottomTextInput);
    createOverlay();
    memes.append(newcontainers);
}

function remove(e) {
    e.remove();
}