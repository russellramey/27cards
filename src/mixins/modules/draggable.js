/*jshint esversion: 6*/

/**
 * Horizontal draggable
 *
 * @param array
 * @return default
 *
**/
const draggable = function(elem) {
    // Variables
    var mouseDown = false;
    var startX, scrollLeft;

    // Start dragging
    var startDragging = function (e) {
      mouseDown = true;
      startX = e.pageX - elem.offsetLeft;
      scrollLeft = elem.scrollLeft;
      setTimeout(function() {
          if(mouseDown) {
            elem.classList.add("is-dragging");
          }
      }, 150);
    };

    // Stop dragging
    var stopDragging = function () {
        mouseDown = false;
        elem.classList.remove("is-dragging");
    };

    // Event listeners
    elem.addEventListener('mousemove', (e) => {
        e.preventDefault();
        if(!mouseDown) { return; }
        var x = e.pageX - elem.offsetLeft;
        var scroll = x - startX;
        elem.scrollLeft = scrollLeft - scroll;
    });
    // Add the event listeners
    elem.addEventListener('mousedown', startDragging, false);
    elem.addEventListener('mouseup', stopDragging, false);
    elem.addEventListener('mouseleave', stopDragging, false);
};

// Export mixin
export default draggable;
