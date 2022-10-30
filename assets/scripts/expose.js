// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const jsConfetti = new JSConfetti();

  const selectElement = document.getElementById('horn-select');
  const img1=document.getElementsByTagName("img")[0];
  const img2=document.getElementsByTagName("img")[1];
  const sound=document.getElementsByTagName("audio")[0];
  const btn=document.getElementsByTagName("button")[0];
  const bvlm=document.getElementById('volume');


 
  selectElement.addEventListener('change',(event)=>{
    switch(event.target.value){
      case 'air-horn':
        img1.src="./assets/images/air-horn.svg";
        sound.src="./assets/audio/air-horn.mp3";
        break;
      case 'car-horn':
        img1.src="./assets/images/car-horn.svg";
        sound.src="./assets/audio/car-horn.mp3";
        break;
      case 'party-horn':
        jsConfetti.addConfetti();
        img1.src="./assets/images/party-horn.svg";
        sound.src="./assets/audio/party-horn.mp3";
        break;
    }
    
    bvlm.addEventListener('change',(event)=>{
      let x=event.target.value;
      let v;
      
        if(x==0){
          img2.src="./assets/icons/volume-level-0.svg";
          v=0.01*x;
          sound.volume=(v);
          
        }
        else if (x>=1 && x<33){
          img2.src="./assets/icons/volume-level-1.svg";
          v=0.01*x;
          sound.volume=(v);
          console.log(sound.volume);
        }
        else if (x>=33 && x<67){
          img2.src="./assets/icons/volume-level-2.svg";
          v=0.01*x;
          sound.volume=(v);
          console.log(sound.volume);
        }
        else if(x>=67 && x<=100){
          img2.src="./assets/icons/volume-level-3.svg";
          v=0.01*x;
          sound.volume=(v);
          console.log(sound.volume);
        }
      
    })
    btn.addEventListener('click',()=>{
      sound.play();
    })


  });

 
}
