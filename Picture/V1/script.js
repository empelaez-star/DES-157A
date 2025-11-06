 (function(){
    'use strict';
    console.log('reading js');

    const item = document.querySelectorAll("img");

    document.querySelector('#bunnyspot').addEventListener('mouseover', function(animatebunny){
      document.querySelector('#bunny').className = "sway";
    });
    document.querySelector('#bunnyspot').addEventListener('mouseout', function(stopanimation){
      document.querySelector('#bunny').className = "still";
    })
    document.querySelector('#lipspot').addEventListener('pointerenter', function(animationlip){
        document.querySelector('#lip').className = "sway";
    });
    document.querySelector('#lipspot').addEventListener('mouseout', function(stopanimation){
      document.querySelector('#lip').className = "still";
    })
     document.querySelector('#fishspot').addEventListener('pointerenter', function(animationfish){
        document.querySelector('#fish').className = "sway";
    });
    document.querySelector('#fishspot').addEventListener('mouseout', function(stopanimation){
      document.querySelector('#fish').className = "still";
    })
    
     document.querySelector('#comspot').addEventListener('pointerenter', function(animationcom){
        document.querySelector('#com').className = "sway";
    });
    document.querySelector('#comspot').addEventListener('mouseout', function(stopanimation){
      document.querySelector('#com').className = "still";
    })


    document.querySelector('#bunnyspot').addEventListener('click', function(bigbunny){
      document.querySelector('#bunny').className = "bigbunny";
    })
    document.querySelector('#lipspot').addEventListener('click', function(biglip){
      document.querySelector('#lip').className = "biglip";
    })
    document.querySelector('#fishspot').addEventListener('click', function(bigfish){
      document.querySelector('#fish').className = "bigfish";
    })
    document.querySelector('#comspot').addEventListener('click', function(bigcom){
      document.querySelector('#com').className = "bigcom";
    })
    })()