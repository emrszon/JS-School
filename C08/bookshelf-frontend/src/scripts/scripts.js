
    document.getElementById("logo").onclick = function () {
        if (window.innerWidth <= 900) {
            openNav()
        }
    };

    function openNav() {
        document.getElementById("mobileSidenav").style.width = "250px";
    }
    document.getElementById("closenav").onclick = function () {
        closeNav()
    };

    function closeNav() {
        document.getElementById("mobileSidenav").style.width = "0";
    }

