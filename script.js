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

function startDictation() {

    if (window.hasOwnProperty('webkitSpeechRecognition')) {

      var recognition = new webkitSpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      recognition.start();

      recognition.onresult = function (e) {
        query.value = e.results[0][0].transcript;
        recognition.stop();
        gobtn.submit();
      };
      recognition.onerror = function(e) {
        recognition.stop();
      }
    }
  }
