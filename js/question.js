
$(function(){

	$('.question-contents .questions').click(function(){
			
			var $answer = $(this).next('.answer');

			if($answer.hasClass('open')){
					$answer.removeClass('open');
					$answer.slideUp();
					$(this).children('span').text('+');
			}else{
					$answer.addClass('open');
					$answer.slideDown();
					$(this).children('span').text('-');
			}
			
			// $(this).next().addClass('.answer-open');
	})
	

})
