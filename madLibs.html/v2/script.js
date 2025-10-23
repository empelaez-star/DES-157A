(function(){
    'use strict';
    console.log('reading js');

    const myform = document.querySelector('#myform');
    const madlb = document.querySelector('#madlib');
    const myoverlay = document.querySelector('#overlay');
    const overlayArticle = document.querySelector('article');
   


    myform.addEventListener('submit', function(event){

        event.preventDefault();
    
       document.querySelector('#overlay').className = 'showing';
        //myoverlay.classList.remove('hidden');
        //myoverlay.classList.add('showing');
        //myform.classList.add('hidden');
        //myform.classList.remove('showing');
        

        const yourName = document.querySelector('#yourName').value;
        const abnoun = document.querySelector('#AbstractNoun').value;
        const pnoun = document.querySelector('#pluralNoun').value;
        const adj = document.querySelector('#adjective').value;
        const ptverb = document.querySelector('#ptVerb').value;
        const noun1 = document.querySelector('#noun').value;

        const myText = `here are your words: ${yourName} ${abnoun} ${pnoun} ${adj} ${ptverb} ${noun1}`;
    

        

    myoverlay.innerHTML = `Your Confession! ${myText}`;
    



        
      


    });
})

