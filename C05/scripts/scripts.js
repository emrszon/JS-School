    import * as bookshelf from './books.js'
    bookshelf.loadcontent();




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

    document.getElementById("mobileBtn").onclick = function () {
        mobile()
    };
    document.getElementById("userBtn").onclick = function () {
        desktop()
    };

    function mobile() {
        document.getElementById("mobileDropdown").classList.toggle("show");
    }

    function desktop() {
        document.getElementById("userDropdown").classList.toggle("show");
    }

    // document.getElementsByClassName("more").addEventListener("click", function(){
    //     document.getElementsByClassName()
    // });


    $('.menuOption').click(function () {
        if ($(this).hasClass('menuOption')) {
            $('#menuOptionselected').addClass('menuOption').attr("id", '')
            $(this).removeClass('menuOption').attr("id", 'menuOptionselected');
            $('#bookshelfTitle').text($(this).text())
        }
    });
    

    $('.menuOptionMobile').click(function () {
        if ($(this).hasClass('menuOptionMobile')) {
            $('#menuOptionMobileselected').addClass('menuOptionMobile').attr("id", '')
            $(this).removeClass('menuOptionMobile').attr("id", 'menuOptionMobileselected');
            $('#bookshelfTitle').text($(this).text())
        }
    });

    document.getElementById("search").addEventListener("click", searched());
    document.addEventListener("click", function () {
        $('.books').show();
        $('#search').val('');
        searching="";
    });

    var searching = '';
    function searched() {
        searching="";
        $('#search').keydown(function () {
            $('.books').hide();
            if (String.fromCharCode(event.which) == String.fromCharCode(8)) {
                searching = searching.substring(0, searching.length - 1);
                searchbook();
            } else {
                searching += String.fromCharCode(event.which);
                searchbook();
        }
    });

    function searchbook(){
        let bookId = [];
        for (let i = 0; i < $(".books").length; i++) {
                    bookId.push($(".books")[i].id);
                }
                for (let i = 0; i < $(".books").length; i++) {
                    var texted = $('#' + bookId[i]).text().toUpperCase();
                    texted = texted.toUpperCase();
                    if (texted.includes(searching.toUpperCase())) {
                        $('#' + bookId[i]).show();
                    }
                }
           
            if (searching.length == 0) {
                $('.books').show();
            }
            
    }
}