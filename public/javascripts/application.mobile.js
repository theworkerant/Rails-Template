var get_current_position = function() {
  
  $.mobile.pageLoading( false );
  if(geo_position_js.init()){
    geo_position_js.getCurrentPosition( get_current_location, function() { alert("couldn't get your position!"); $.mobile.pageLoading( true );} );
  }

};

var get_current_location = function(position) {
  $.mobile.pageLoading( true );
  alert("You're at: lat: "+position.coords.latitude+" lon: "+position.coords.longitude);
};

$(document).bind("mobileinit", function() {

  $(".locate_me_page").live("pageshow", function() { get_current_position(); });

});