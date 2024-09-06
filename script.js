$(function()
    {
     $(".registerbutton").click(function()
     {

           $("#register").fadeIn(3000)
           $("#login").fadeOut(1400)
           $(".updiv").animate({left:'500'},2000)
           $(".newhere").fadeOut(1400)
           $(".signinhere").delay(1400).fadeIn(2000)
           $(".registerbutton").fadeOut(1400)
           $(".loginbutton").delay(1300).fadeIn(2000)
        
     });


     $(".loginbutton").click(function()
     {
           $("#register").fadeOut(1400)
           $("#login").fadeIn(3000)
           $(".updiv").animate({left:'0'}, 2000)
           $(".newhere").delay(1400).fadeIn(2000)
           $(".signinhere").fadeOut(1400)
           $(".registerbutton").delay(1300).fadeIn(2000)
           $(".loginbutton").fadeOut(1400)
           
     });
    
    });

    function register()
    {
      var regname=document.regform.nametext.value;
      if(regname==null|| regname=="")
      {
       // document.getElementById('namespan').innerText="Name cant be empty ";
       alert(' Name can not be Empty')
        return false;
      }
    
    }

