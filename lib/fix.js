jQuery(document).ready( function ($) {

	function is_sharepoint() {
		var generator = $("head meta[name='GENERATOR']").attr('content');

		return generator == "Microsoft SharePoint";
	}

	function fix_sharepoint() {
		$("body").css({'overflow': 'visible'});
		$("body").removeAttr("scroll");
		$("body #s4-workspace").css({'overflow-y': 'auto'});
	}

	if ( is_sharepoint() ) {
		fix_sharepoint();
	}

} );
