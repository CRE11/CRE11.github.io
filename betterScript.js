            
            
        $(document).ready(function(){
        
        
        if($(window).width() > 760){

            $(".menuItems").hide();
            
             $("#menuIcon").click(function(){

                 $(this).toggleClass("fa-bars fa-times");
                 $(".menuItems").toggle();


             });

             
        };
             
        
        if($(window).width() < 760) {
           
            $(".menuItems").hide();
                    
            $(".fa-bars").click(function(){
                
                $(".menuItems").toggle();
                $("#menuIcon").toggleClass("fa-times fa-bars");
                $("nav").toggleClass("navigationTwo");
                
            });
           
           
        };
            

                $(".text").hide();

                $(".extendText").click(function(){

                    $(this).parent().siblings(".text").fadeToggle(500);
                    $(this).toggleClass("fa-caret-right fa-caret-down");

                })


        });