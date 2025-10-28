// (function(){
//     'use strict';
//     console.log('reading js');

//     const myform = document.querySelector('#myform');
//     const madlb = document.querySelector('#madlib');
//     const overlay = document.querySelector('#overlay');
//     const overlayArticle = document.querySelector('article');
   


//     myform.addEventListener('submit', function(event){

//         event.preventDefault();
    
//        //document.querySelector('#overlay').className = 'showing';
//         overlay.classList.remove('hidden');
//         overlay.classList.add('showing');
//         //myform.classList.add('hidden');
//         //myform.classList.remove('showing');
        

//         const yourName = document.querySelector('#yourName').value;
//         const abnoun = document.querySelector('#AbstractNoun').value;
//         const pnoun = document.querySelector('#pluralNoun').value;
//         const adj = document.querySelector('#adjective').value;
//         const ptverb = document.querySelector('#ptVerb').value;
//         const noun1 = document.querySelector('#noun').value;

//         const myText = `here are your words: ${yourName} ${abnoun} ${pnoun} ${adj} ${ptverb} ${noun1}`;
//         console.log(myText);
    

        

//     overlay.innerHTML = `Your Confession! ${myText}`;
    



        
      


//     });
// })



(function(){
    'use strict';
    console.log('reading js');

    const myform = document.querySelector('#myform');
    const madlb = document.querySelector('#madlib');
    const overlay = document.querySelector('#overlay');
    const overlayArticle = document.querySelector('article');
   


    myform.addEventListener('submit', function(event){

        event.preventDefault();
    
       //document.querySelector('#overlay').className = 'showing';
        overlay.classList.remove('hidden');
        overlay.classList.add('showing');
        //myform.classList.add('hidden');
        //myform.classList.remove('showing');
        

        const yourName = document.querySelector('#yourName').value;
        const abnoun = document.querySelector('#AbstractNoun').value;
        const pnoun = document.querySelector('#pluralNoun').value;
        const adj = document.querySelector('#adjective').value;
        const ptverb = document.querySelector('#ptVerb').value;
        const noun1 = document.querySelector('#noun').value;

        const myText = `My name’s ${yourName}, and I came here looking for ${abnoun}, not ${pnoun}. But somehow, that’s all I’ve found. My last date was so ${adj}, I almost ${ptverb} right then and there. If I don’t get a rose tonight, I swear I’m leaving to find someone who actually appreciates ${noun1}!`;
        console.log(myText);
    

        

    madlb.innerHTML = `${myText}`;
  
    
  });
   document.querySelector('.close').addEventListener('click', function(event) {
  event.preventDefault();
  overlay.classList.add('hidden');
  overlay.classList.remove('showing');
});
})()

