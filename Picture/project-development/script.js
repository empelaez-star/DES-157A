 (function(){
    'use strict';
    console.log('reading js');

    const item = document.querySelectorAll("img");

    item.addEventListener('mouseover', function(){
            item.innerHTML = "The mouse is over the box!";
        });

          item.addEventListener('mouseout', function(){
            item.innerHTML = "The mouse has left the box!";
        });
    })()