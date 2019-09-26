      // pop-up animation
      import { loadcontent } from './books.js'
      loadcontent();
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

      document.getElementById("mobileBtn").onclick = function() { myFunction() };
      document.getElementById("userBtn").onclick = function() { myFunction2() };

      function myFunction() {
          document.getElementById("mobileDropdown").classList.toggle("show");
      }

      function myFunction2() {
          document.getElementById("userDropdown").classList.toggle("show");
      }