 (function(){
    'use strict';
    console.log('reading js');

    const item = document.querySelectorAll("img");
    const overlay = document.querySelector('#sayingbun');
    const overlaylip = document.querySelector('#sayinglip');
    const overlaycom = document.querySelector('#sayingcom');
    const overlayfish = document.querySelector('#sayingfish');

    document.querySelector('#bunnyspot').addEventListener('mouseover', function(animatebunny){
      document.querySelector('#bunny').className = "bunnysway";
    });
    document.querySelector('#bunnyspot').addEventListener('mouseout', function(stopanimation){
      document.querySelector('#bunny').classList.remove('bunnysway');
      document.querySelector('#bunny').classList.add('smallbunny');
      //bunny.classList.remove('bunnyswat');
    })
    document.querySelector('#lipspot').addEventListener('pointerenter', function(animationlip){
        document.querySelector('#lip').className = "lipsway";
    });
    document.querySelector('#lipspot').addEventListener('mouseout', function(stopanimation){
      //document.querySelector('#lip').className = "smalllip";
      document.querySelector('#lip').classList.remove('lipsway');
      document.querySelector('#lip').classList.add('smalllip');
    })
     document.querySelector('#fishspot').addEventListener('pointerenter', function(animationfish){
        document.querySelector('#fish').className = "fishsway";
    });
    document.querySelector('#fishspot').addEventListener('mouseout', function(stopanimation){
      //document.querySelector('#fish').className = "smallfish";
      document.querySelector('#fish').classList.remove('fishsway');
      document.querySelector('#fish').classList.add('smallfish');
    })
    
     document.querySelector('#comspot').addEventListener('pointerenter', function(animationcom){
        document.querySelector('#com').className = "comsway";
    });
    document.querySelector('#comspot').addEventListener('mouseout', function(stopanimation){
      //document.querySelector('#com').className = "smallcom";
      document.querySelector('#com').classList.remove('comsway');
      document.querySelector('#com').classList.add('smallcom');
    })



    document.querySelector('#bunnyspot').addEventListener('click', function(bigbunny){
      document.querySelector('#bunny').className = "bigbunny";
      overlay.classList.remove('bunnyclose');
      overlay.classList.add('bunnysays');
      //document.querySelector('#bunny').style.zIndex = "20";
    })
    document.querySelector('#lipspot').addEventListener('click', function(biglip){
      document.querySelector('#lip').className = "biglip";
      overlaylip.classList.remove('lipclose');
      overlaylip.classList.add('lipsays');
    })
    document.querySelector('#fishspot').addEventListener('click', function(bigfish){
      document.querySelector('#fish').className = "bigfish";
      overlayfish.classList.remove('fishclose');
      overlayfish.classList.add('fishsays');
    })
    document.querySelector('#comspot').addEventListener('click', function(bigcom){
      document.querySelector('#com').className = "bigcom";
      overlaycom.classList.remove('comclose');
      overlaycom.classList.add('comsays');
    })



    document.querySelector('.bunnybye').addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelector('#bunny').className = "smallbunny";
      overlay.classList.add('bunnyclose');
      overlay.classList.remove('bunnysays');
      });
       document.querySelector('.lipbye').addEventListener('click', function(event) {
      event.preventDefault();
     document.querySelector('#lip').className = "smalllip";
      overlaylip.classList.add('lipclose');
      overlaylip.classList.remove('lipsays');
      });
       document.querySelector('.combye').addEventListener('click', function(event) {
      event.preventDefault();
    document.querySelector('#com').className = "smallcom";
      overlaycom.classList.add('comclose');
      overlaycom.classList.remove('comsays');
      });
        document.querySelector('.fishbye').addEventListener('click', function(event) {
      event.preventDefault();
    document.querySelector('#fish').className = "smallfish";
      overlayfish.classList.add('fishclose');
      overlayfish.classList.remove('fishsays');
      });
       
    
    
    })()