const query = document.querySelector('.search input');
const gobtn = document.querySelector('.search button');

function goGoogle(){
    let url = 'https://www.google.com/search?q='+query.value;
    window.open(url);
}

gobtn.addEventListener("click", e => {
    goGoogle();
});
query.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        goGoogle();
    }
    
});

var mic = document.getElementById('speechinput');
mic.onfocus = mic.blur;
mic.onwebkitspeechchange = function(e) {
document.getElementById('mytextarea').value = speechinput .value;  
};