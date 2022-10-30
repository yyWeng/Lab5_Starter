// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const textinput=document.getElementById('text-to-speak');
  const vselector=document.getElementById('voice-select');
  const btn=document.getElementsByTagName('button')[0];
 
  let voices= [];
  speechSynthesis.onvoiceschanged=function(){
    let utterance = new SpeechSynthesisUtterance();
    voices=speechSynthesis.getVoices();

    for(let i=0;i<voices.length;i++){
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.value=voices[i].name;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      vselector.appendChild(option);
    }
    vselector.addEventListener('change',(event)=>{
      for(let j=0;j<voices.length;j++){
        if(voices[j].name==event.target.value){
          utterance.voice=voices[j];
        }
      }
    })
    textinput.addEventListener('input',(event)=>{
      utterance.text=event.target.value;

    })
    btn.addEventListener('click',()=>{
      speechSynthesis.speak(utterance); 
    })
    
    
  }

  
}
