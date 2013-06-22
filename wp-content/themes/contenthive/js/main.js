	// Responsive Nav adapted from responsive-nav.com


	var navigation = responsiveNav("#nav", { // Selector: The ID of the wrapper
	    animate: true, // Boolean: Use CSS3 transitions, true or false
	    transition: 200, // Integer: Speed of the transition, in milliseconds
	    label: "Menu", // String: Label for the navigation toggle
	    insert: "after", // String: Insert the toggle before or after the navigation
	    customToggle: "#nav-toggle", // Selector: Specify the ID of a custom toggle
	    openPos: "relative", // String: Position of the opened nav, relative or static
	    jsClass: "js", // String: 'JS enabled' class which is added to <html> el
	    init: function(){}, // Function: Init callback
	    open: function(){}, // Function: Open callback
	    close: function(){} // Function: Close callback
	});


// Nathan C. Ford's WidowTamer:

	wt.fix({
		elements: 'h3, h4, h5',
		chars: 14,
		method: 'nbsp',
		event: 'resize'
	});

	wt.fix({
		elements: 'p',
		chars: 10,
		method: 'padding-right',
		event: 'resize'
	});