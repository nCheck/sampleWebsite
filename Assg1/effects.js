
console.log($( window ).width());

	if ($( window ).width() < 600)
	{
		var side = $( window ).width();
		// $(".boxleft").removeClass("boxleft")
		// 	.addClass("padder")
		// 		.css({"border-bottom": "1px solid grey", "padding-bottom" : "20px" , "padding-top" : "20px" });
		// $(".box").removeClass("box")
		// 	.addClass("padder")
		// 		.css({"border-bottom": "1px solid grey", "padding-bottom" : "50px" });
		// $(".boxright").removeClass("boxright")
		// 	.addClass("padder")
		// 		.css({"border-bottom": "1px solid grey", "padding-bottom" : "50px" });


		$('.col-6.col-lg-3').removeClass('box').removeClass('boxright').removeClass('boxleft')

		for (var i = 0 ; i <= $('.col-6.col-lg-3').length - 1; i++) {
			if(i%2 == 0)
			{
				$('.col-6.col-lg-3').eq(i).css({
					"border-right": '1px solid grey' ,
					"border-bottom":"1px solid grey"
				});
			}
			else
			{
				$('.col-6.col-lg-3').eq(i).css({
					"border-bottom":"1px solid grey"
				});
			}
		}

		$('#removenav').css('display' , 'none');
		$('.product').attr({
			'height': side-15,
			'width': side-15
		}).addClass('img-fluid');

		$('.stickbot').css({
			'bottom': '0',
			'positon': 'fixed'
		});
		$('.cart').addClass('offset-1');
		$('.buyNow').addClass('offset-1');
	}

$('.cbutton').click(function(event) {
	var pid = $(this).attr('id');
	console.log(pid);
	$(this).parent('div').siblings('img')
		.attr('src', 'images/' + pid +'.png');
});


$('.ccbutton').click(function(event) {
	var pid = $(this).attr('id');
	$('img').attr('src', 'images/' + pid +'.png');
});





pincodes = [401300 , 401301 , 401303 , 401305];

$('#check').click(function(event) {
	var avail = false;
	for (var i = pincodes.length - 1; i >= 0; i--) {
		if(pincodes[i] == $('#pincode').val())
		{
			avail = true
			break
		}
	}
	var disp;
	if(avail)
	{
		disp = '<h5>This item will be delivered in 3-5 bussiness days</h5>'
	}
	else
	{
		disp = "<h5>Sorry delivery is temporarily not available in your area</h5>"
	}
	$('.avail').html(disp)
});


$('.wishlist').click(function(event) {
	$(this).addClass('animated bounceOutUp');

	var delayInMilliseconds = 1000;

	setTimeout(function() {
		$('.fa-heart-o').addClass('animated bounce')
	}, delayInMilliseconds);

});

$('.cart').click(function(event) {
	$(this).addClass('animated bounceOutUp');

	var delayInMilliseconds = 1000;

	setTimeout(function() {
		$('.fa-shopping-cart').addClass('animated bounce');
	}, delayInMilliseconds);
	
});