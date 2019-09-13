      // tippy animation
      tippy('.books', {
          arrow: true,
          touchHold: true,
          delay: [150, 100],
          animation: 'scale',
          html: '#BookInfo'

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
          document.getElementById("userDrop").classList.toggle("show");
      }


      function showMobileOptions() {
          document.getElementById("mobileDrop").classList.toggle("show");
      }


      window.onclick = function(event) {
          if (!event.target.matches('.header i')) {

              var dropdowns = document.getElementsByClassName("user-dropdown-content");
              var i;

              for (i = 0; i < dropdowns.length; i++) {
                  var openDropdown = dropdowns[i];
                  if (openDropdown.classList.contains('show')) {
                      openDropdown.classList.remove('show');
                  }
              }
          }


          //   if (!event.target.matches('.header .mobile-drop-content i')) {

          //       var dropdowns = document.getElementsByClassName("mobile-drop-content");
          //       var i;

          //       for (i = 0; i < dropdowns.length; i++) {
          //           var openDropdown = dropdowns[i];
          //           if (openDropdown.classList.contains('show')) {
          //               openDropdown.classList.remove('show');
          //           }
          //       }
          //   }

      }