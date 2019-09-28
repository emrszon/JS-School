    import * as bookshelf from './books.js'
    bookshelf.loadcontent();

    function openNav() {
        if (window.innerWidth <= 750) {
            document.getElementById("mySidenav").style.width = "250px";

        }
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    document.getElementById("mobileBtn").onclick = function() { mobile() };
    document.getElementById("userBtn").onclick = function() { desktop() };

    function mobile() {
        document.getElementById("mobileDropdown").classList.toggle("show");
    }

    function desktop() {
        document.getElementById("userDropdown").classList.toggle("show");
    }