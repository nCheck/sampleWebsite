


	if ($( window ).width() < 600)
	{
		$(".boxleft").removeClass("boxleft")
			.addClass("padder")
				.css({"border-bottom": "1px solid grey", "padding-bottom" : "20px" , "padding-top" : "20px" });
		$(".box").removeClass("box")
			.addClass("padder")
				.css({"border-bottom": "1px solid grey", "padding-bottom" : "50px" });
		$(".boxright").removeClass("boxright")
			.addClass("padder")
				.css({"border-bottom": "1px solid grey", "padding-bottom" : "50px" });
	}

$('.cbutton').click(function(event) {
	$('img').attr('src', 'images/' + $(this).attr('id')+'.png');
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