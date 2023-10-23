const wordElement=document.getElementById("word");
const popup=document.getElementById("popup-container")
const messageElement=document.getElementById("success-message")
const loseMessage=document.getElementById("lose-message")
const wrongLettersEl=document.getElementById("wrong-letters")
const items=document.querySelectorAll(".item")
const KpopupContainer=document.querySelector("#Kpopup-container")





const correctletters=[]
const wrongletters=[];
const selectedWord=getRandomWord();

function getRandomWord(){
    
    
     const Dizi=["javascript","java","html","css","git","react"]
     return Dizi[Math.floor(Math.random()*Dizi.length)]
     
    
}


  function displayDizi() {
    const selectedWord=getRandomWord();
    wordElement.innerHTML=`
    
    ${selectedWord.split("").map(letter=>`
        <div class="letter">
        
        ${correctletters.includes(letter) ? letter:""}
        </div>
    
    `).join("")}
    
    `;
    const w=wordElement.innerText.replace(/\n/g,"");
    if (w === selectedWord) {
        popup.togglePopover = "flex";

        messageElement.innerText = "Harika !! Başardınız :D";
        
        
    }else{

        popup.innerHTML=`
        ${KpopupContainer.style.display="flex"}
       
        `
        console.log(KpopupContainer);
        
            
    

        
        


     
        
        
        
    }


    

    
    
  }
  function updateWrongLetters(){
    wrongLettersEl.innerHTML=`
    ${wrongletters>6?"kaybettiniz":""}
    ${wrongletters.length>0?"<h3>Hatalı Harfler</h3>":""}
    ${wrongletters.map(letter=>`<span>${letter}</span>`)}
    `;
    items.forEach((item,index)=>{

        const errorCount=wrongletters.length;
        if (index<errorCount) {
            item.style.display="block"
        
            
        }else{
            item.style.display="none"
        }
    })
  }
  window.addEventListener("keydown",function (e) {
    if (e.keyCode>=65 && e.keyCode<=90) {
       const letter=e.key;
       if (selectedWord.includes(letter)) {
        if (!correctletters.includes(letter)) {
            correctletters.push(letter)
            displayDizi()
            
        }else{
            console.log("bu harfi zaten eklediniz");
        }
        
       }else{
        if (!wrongletters.includes(letter)) {
            wrongletters.push(letter);
            updateWrongLetters();
            
        }
       }
    }
    
  })
  displayDizi()
  
  






