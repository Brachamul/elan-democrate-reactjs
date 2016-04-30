$( document ).ready(function() {

	$('.tabFrame__button').click(function(){
		$('.tabFrame__button').removeClass('active')
		$(this).addClass('active')
		var tabName = $(this).attr('data-target-tab')
		openTab(tabName)
	})

});

function openTab(tabName) {
	$('.tabContent').fadeOut(300, function(){
		$('#' + tabName).fadeIn()
	});
}