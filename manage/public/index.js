
$(function() {


	$( ".portlets" ).sortable({
		connectWith: ".portlets",
		cancel: ".portlet-toggle",
		placeholder: "portlet-placeholder ui-corner-all"
	});

	/*
	$( ".column" ).sortable({
		connectWith: ".column",
		handle: ".portlet-header",
		cancel: ".portlet-toggle",
		placeholder: "portlet-placeholder ui-corner-all"
	});
	
	$( ".portlet" )
		.addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
		.find( ".portlet-header" )
			.addClass( "ui-widget-header ui-corner-all" )
			.prepend( "<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");

	$( ".portlet-toggle" ).click(function() {
		var icon = $( this );
		icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
		icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
	});*/
	
	$.ajax({
		url: '/component/list'
	}).done(function(json){
		var source   = $("#sidepane-template").html();
		var template = Handlebars.compile(source);
		$('#components .sidepane').html(template(json));
	});
	
	function workspaceGetComponent(ele){
		var components = [];
		var imports = ele.find('>[import]');
		imports.each(function(){
			var self = $(this);
			components.push({
				'name': self.attr('name'),
				'style': self.attr('style')
			});
			
		});

		return components;
	}

	$('#preview').click(function(){
		var workspace = $('#workspace');
		var cs = workspaceGetComponent(workspace);
		console.log(cs);
	});
});