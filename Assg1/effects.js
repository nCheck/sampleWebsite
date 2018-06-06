
console.log($( window ).width());

	if ($( window ).width() < 600)
	{
		var side = $( window ).width();
		$(".boxleft").removeClass("boxleft")
			.addClass("padder")
				.css({"border-bottom": "1px solid grey", "padding-bottom" : "20px" , "padding-top" : "20px" });
		$(".box").removeClass("box")
			.addClass("padder")
				.css({"border-bottom": "1px solid grey", "padding-bottom" : "50px" });
		$(".boxright").removeClass("boxright")
			.addClass("padder")
				.css({"border-bottom": "1px solid grey", "padding-bottom" : "50px" });
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
	console.log($(this).parent('div').parent('div').parent('div').siblings('img').attr('src'));
	$(this).parent('div').parent('div').parent('div').siblings('img')
		.attr('src', 'images/' + pid +'.png');
});


$('.cbutton').click(function(event) {
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