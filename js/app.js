$('.jsload').on('click', function(e) { //loads partial views to reduce file calls
    'use strict';
    e.preventDefault();
    var url = this.href;
    $('#page').remove();
    $('#content').load(url + "#page").hide().fadeIn('fast');
});