$(document).ready(function(){

	var $form = $('.form');
	var $forms = $('.forms');

	validate($form);
	validate($forms);


	$('.category__all').click(function(){
		$(this).find('.category__all-p').toggle(1000);
	});


	$('.mobil__btn').click(function(){
		$(this).nextAll('.menu').toggle(1500);
		$(this).toggle(1500);
	});


	function generateError(text){
		var error = document.createElement('div');
		$(error).addClass('error')
			.css({'color':'red','position':'absolute'})
			.html(text);
		return error;
	}


	function removeValitation (){
		$("div.error").remove();
		}


	function checkFieldsPresence (valid){

		for (var i = 0; i<valid.length; i++){
			if( !valid[i].value ){
				var error = generateError("вы не ввели данные");
				$(error).insertAfter($(valid[i]));

			}
			else{
				var success = generateError("поле заполнено верно");
				$(success).css('color','green');
				$(success).insertAfter($(valid[i]));
			}
		}}

	function validate(form){
		form.on('submit', function (event) {
			var valid = $(this).find('.valid');

			event.preventDefault();
			removeValitation();
			checkFieldsPresence(valid);
		});
	}
});
















