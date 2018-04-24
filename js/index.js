$(document).ready(function(){
  $('.video-embed-image').click(function(e){
    var videokey = $(this).data('videokey');
    var videourl = $(this).data('videourl');
    var imgwidth = $(this).width();
    var imgheight = $(this).height();
    console.log(imgwidth + imgheight);
    var videoposter =  $('.video-poster[data-videoposterkey="'+videokey+'"]');
    var html = '<iframe class="video-embed-iframe" width="'+imgwidth+'" height="'+imgheight+'" src="'+videourl+'?enablejsapi=1" feature="oembed&quot;" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>';
    console.log(html);
    videoposter.html(html);
    var videotext = $('.videotext[data-videotext="'+videokey+'"]');
    videotext.hide();
  });
});