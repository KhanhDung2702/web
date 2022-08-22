window.addEventListener("load", ()=>{
    // dark light mode
    const mode = document.getElementById("mode");
    mode.addEventListener('click', function(){
        document.body.classList.toggle("light-theme");
    })

    // audio
    const vol__bar = document.querySelectorAll(".vol__bar"); 
    const sounds = document.querySelectorAll(".sound"); 
    
    Array.from(document.getElementsByClassName("play__img")).forEach((element, index)=>{
        element.addEventListener('click', ()=>{
            vol__bar[index].classList.toggle("vol__open");
            
            if(element.dataset.playing==="false"){
                element.dataset.playing="true";
                sounds[index].play();
                
            }
            else{
                element.dataset.playing="false";
                sounds[index].pause();
            }
        })
    })
    // volume
    Array.from(document.getElementsByClassName("vol__bar")).forEach((element, index)=>{
        element.addEventListener('change', ()=>{
            const vol__value=element.value;
            sounds[index].volume = vol__value/100;
        })
    })
});














