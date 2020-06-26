 
       
     function change(id){
         
         id.innerHTML = "Welcome to my site. It's an honor";
         
         
     }
       document.getElementById(welcome).addEventListener("mouseover", function(){
           
           document.getElementById("cool").innerHTML +="mouseover";
           
       })
       
       function displayDate(){
           
           document.getElementById("demo").innerHTML = Date();
           
           document.getElementById("demo").addEventListener("click",function(){
               
               alert("Your curent date has been displayed take a closer look");
               
           })
       }
        
       document.getElementById("welcome").addEventListener("click",function(){
           
           
           alert("WELCOME DISPLAY")
           
       })
    