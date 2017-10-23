function removeAndDisplay() {
    //remove parts of the Reddit main page
     $('#siteTable').remove();
     $('.trending-subreddits').remove(); 
}

var refreshIntervalId = window.setInterval(removeAndDisplay, 10)

//add message once document loaded
$( document ).ready(function() {
    var message = $('<h1>')
        .attr('id', 'distracted')
        .text("Stop wasting time on Reddit!")
        .css('font-size', '35px')
        .css('font-family', "'Helvetica Neue', Helvetica, Arial, 'lucida grande', tahoma, verdana, arial, sans-serif")
        .css('position', 'relative') 
        .css('text-align', 'center')  
    $( ".content .spacer:first" ).append(message);
    clearInterval(refreshIntervalId);
});