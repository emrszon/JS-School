      // pop-up animation

      
      
      tippy('.books', {
        placement: 'right', 
        trigger: 'click', 
        arrow: true,
          touchHold: true,
          delay: [150, 100],
          animation: 'scale',
          html: '.bookInfo'
                
      })

//sidebar functions
      function openNav() {
          if (window.innerWidth <= 750) {
              document.getElementById("mySidenav").style.width = "250px";

          }
      }

      function closeNav() {
          document.getElementById("mySidenav").style.width = "0";
      }




     //user dropdown functions for mobile (mybtn) and desktop (myBtn2)
document.getElementById("myBtn").onclick = function() {myFunction()};
document.getElementById("myBtn2").onclick = function() {myFunction2()};

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }



      