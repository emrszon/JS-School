      // tippy animation

      
      
      tippy('.books', {
        placement: 'right', 
        trigger: 'click', 
        arrow: true,
          touchHold: true,
          delay: [150, 100],
          animation: 'scale',
          html: '.bookInfo'
                
      })


      function openNav() {
          if (window.innerWidth <= 750) {
              document.getElementById("mySidenav").style.width = "250px";

          }
      }

      function closeNav() {
          document.getElementById("mySidenav").style.width = "0";
      }


      function showUserOptions() {
          document.getElementById("userDrop")
      }


     // Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn").onclick = function() {myFunction()};
document.getElementById("myBtn2").onclick = function() {myFunction2()};
/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }



      