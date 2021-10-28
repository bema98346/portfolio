$('.works-img').hover(
    function() {
        onmouse()
    }, function() {
        offmouse()
    }
);

$('.works-txt').hover(
    function() {
        onmouse()
    }, function() {
        offmouse()
    }
);

function onmouse() {
    $('.works-span').css(`background`,`#f8f8f8`).css(`box-shadow`,`0 2.5px 10px 0 #bbb`).css(`transition`,`0.5s all`)    
};

function offmouse() {
    $('.works-span').css(`background`,`#fff`).css(`box-shadow`,`0 2.5px 5px 0 #bbb`).css(`transition`,`0.5s all`)
};
