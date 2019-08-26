(function ($) {
  $(function () {
    $('#chat-div-snippet').hide();

    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.tabs').tabs('select','test1');
    $('#chat-div').click(function(event) {
    	event.preventDefault();
    	$('#chat-div').hide();
    	$('#chat-div-snippet').show();
    });
    $('#chat-div-snippet').click(function(event) {
    	event.preventDefault();
    	$('#chat-div').show();
    	$('#chat-div-snippet').hide();
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
