(function($){
	$.extend({"log":function(){ 
		if(arguments.length > 0) {
			
			// join for graceful degregation
			var args = (arguments.length > 1) ? Array.prototype.join.call(arguments, " ") : arguments[0];
			
			// this is the standard; firebug and newer webkit browsers support this
			try { 
				console.log(args);
				return true;
			} catch(e) {		
				// newer opera browsers support posting erros to their consoles
				try { 
					opera.postError(args); 
					return true;
				} catch(e) { }
			}
			
			// catch all; a good old alert box
			alert(args);
			return false;
		}
	}});
})(jQuery);
