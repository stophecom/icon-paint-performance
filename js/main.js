String.prototype.repeat = function(num) {
	return new Array(num + 1).join(this);
}

$(document).ready(function() {
	$('.multiply').on('click', function() {
		var factor = $(this).data('factor');
		var $iconBox = $(this).siblings('.box-content');
		var $iconHtml = $iconBox.html();
		$iconBox.html($iconHtml.repeat(factor));
		$(this).hide();
	});
});
