// JavaScript Document
(function(jQuery){ 
	jQuery.fn.balance = function (options) {
		var defaults =	{
							set_height : false,	// false will set 'min-height', true will set 'height',

							same_height : true,
							same_width : false,
							
							limit_height : false,
							limit_width : false,
					
							max_height : 100,
							max_width : 100
						}
		var options = jQuery.extend(defaults, options) ;				
		$maxheight = $maxwidth = 0 ;
		$class = jQuery(this) ;

		$class.each (function () {
			$maxheight = parseFloat(jQuery(this).height()) > $maxheight ? jQuery(this).height() : $maxheight ;
			$maxwidth = parseFloat(jQuery(this).width()) > $maxwidth ? jQuery(this).width() : $maxwidth ;
		});	// return this.each
		if(options.same_height) {
			$maxheight = options.limit_height ? (options.max_height <= $maxheight ? options.max_height : $maxheight) : $maxheight ;
			//$class.height($maxheight) ;	
			// console.log($class.html());
            if(options.set_height) {
            	$class.css({'height' : $maxheight+'px'}) ;	
            }
            else {
            	$class.css({'min-height' : $maxheight+'px'}) ;	
            }
		}

		if(options.same_width) {
			$maxwidth = options.limit_width ? (options.max_width <= $maxwidth? options.max_width : $maxwidth) : $maxwidth ;
			$class.width($maxwidth) ;	
		}

	}		// $.fn.validate = function (options) 
})(jQuery) ;