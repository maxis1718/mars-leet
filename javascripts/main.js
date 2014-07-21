var first = true;

$(document).ready(function(){

	$('.greeting-msg').hide(0);

	mapping();
	greeting();

	setInterval(greeting, 3000);

	$('input.input-area').focus();

	trying();

});

var table = {
	'1': 'ㄅ',
	'2': 'ㄉ',
	'3': 'ˇ',
	'4': 'ˋ',
	'5': 'ㄓ',
	'6': 'ˊ',
	'7': '˙',
	'8': 'ㄚ',
	'9': 'ㄞ',
	'0': 'ㄢ',
	'q': 'ㄆ',
	'w': 'ㄊ',
	'e': 'ㄍ',
	'r': 'ㄐ',
	't': 'ㄔ',
	'y': 'ㄗ',
	'u': 'ㄧ',
	'i': 'ㄛ',
	'o': 'ㄟ',
	'p': 'ㄣ',
	'a': 'ㄇ',
	's': 'ㄋ',
	'd': 'ㄎ',
	'f': 'ㄑ',
	'g': 'ㄕ',
	'h': 'ㄘ',
	'j': 'ㄨ',
	'k': 'ㄜ',
	'l': 'ㄠ',
	';': 'ㄤ', ':': 'ㄤ',
	'z': 'ㄈ',
	'x': 'ㄌ',
	'c': 'ㄏ',
	'v': 'ㄒ',
	'b': 'ㄖ',
	'n': 'ㄙ',
	'm': 'ㄩ',
	',': 'ㄝ',
	'.': 'ㄡ',
	'/': 'ㄥ',
	' ': ' ',
	'-': 'ㄦ',
}

var GreetingWords = ['鵝', '額'];

function greeting()
{
	// "額" "額" 說 "額" "額"
	var penguin = [];
	for(var i = 0; i < 4; i++)
	{
		var idx = Math.floor(Math.random()*10)%2;
		penguin.push(GreetingWords[idx]);
		if(i == 1)
		{
			penguin.push('說');
		}
	}
	var target = $('.greeting-msg');
	target.text(penguin.join(' '));

	if(!first)
	{
		target.slideUp( 200 ).slideDown( 300 );
		$('img.logo').toggleClass('hide');
	}
	else{
		target.slideDown( 300 );
	}
	first = false;
}

function trying()
{
	$('.try-item').click(function(){
		var leet = $(this).find('.leet').text();
		$('.input-area').val(leet).keyup();
	});
}

function mapping(keyboard)
{
	var target = $('#res-wrap');
	var allow = true;

	$('.input-area').keydown(function(e){


		// console.log(e);
		// var str = $.trim($(this).val());
		// var mapped = table[str[str.length-1]];
		// allow = mapped ? true : false;

		// console.log(str, mapped, allow);

	}).keyup(function(e){

		if(!allow){
			return false;
		}

		var bpmf = [];
		var str = $.trim($(this).val());

		for (var i = 0, len = str.length; i < len; i++)
		{ 
			var mapped = table[str[i]];
			if( mapped )
			{
				
				bpmf.push(mapped)
			}
		}
		if(bpmf.length > 0)
		{
			target.html('');
			target.removeClass('hide');
			for (var i = 0; i < bpmf.length; i++)
			{
				var mapped = bpmf[i];
				$('<span/>').text(mapped).appendTo(target);
			}			
		}else
		{
			target.addClass('hide');
		}
		

	});
}
