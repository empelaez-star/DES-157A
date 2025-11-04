(function(){
    'use strict';
    console.log('reading js');
    
        const img = document.getElementById("#bunny");
      
        function enlargeImg() {
            img.style.transform = "scale(1.5)";
            img.style.transition = "transform 0.25s ease";
        }
      
        function resetImg() {
            img.style.transform = "scale(1)";
            img.style.transition = "transform 0.25s ease";
        }
    
})()