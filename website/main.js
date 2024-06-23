// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyOnScroll()};

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyOnScroll() {
    let header =  $("#headbar");
    let headbar_height = header.height()
    if (window.scrollY > headbar_height) {
        header.addClass("sticky");
    } else {
        header.removeClass("sticky");
    }
}
