
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

		$('#sticker').addClass('stickbot');


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
	// var avail = false;
	// for (var i = pincodes.length - 1; i >= 0; i--) {
	// 	if(pincodes[i] == $('#pincode').val())
	// 	{
	// 		avail = true
	// 		break
	// 	}
	// }
	// var disp;
	// if(avail)
	// {
	// 	disp = '<h5>This item will be delivered in 3-5 bussiness days</h5>'
	// }
	// else
	// {
	// 	disp = "<h5>Sorry delivery is temporarily not available in your area</h5>"
	// }
	// $('.avail').html(disp)

	

	var name = $('#pincode').val();


	//Getting Normal data

	$.get( "https://nginx:P1Yd3MF0P@tshirtpartner.com/orders/pincode?pincode=400002"
		, function( data ) {
		console.log('hello');
	  $( ".avail" ).html('<h1>' + data + '</h>'  );
	});


	// $.getJSON('http://anyorigin.com/go?url=https%3A//nginx%3AP1Yd3MF0P@tshirtpartner.com/orders/pincode%3Fpincode%3D'+name+'&callback=?', 
	// 	function(data){
	// 	if((data.contents) == "False")
	// 	{
	// 		$('#pincode').tooltip('show');
	// 	}
	// });

	// $.ajax({
 //    type: "GET",
 //    crossDomain: true ,
 //    url: "https://nginx:P1Yd3MF0P@tshirtpartner.com/orders/pincode?pincode=400002"
	// }).done(function (data) {
 //    console.log(data);
	// });


	//Getting Json Data

		// $.getJSON( "http://www.omdbapi.com/?type=series&t="+name+"&apikey=1c7a930f", function( data ) {
	 //  var items = [];
	 //  $.each( data, function( key, val ) {
	 //    items.push( "<h1>" + key + " : " + val +  "</h1>" );
	 //  });
	 //  var ans;
	 //  for (var i = 1; i < items.length; i++) {
	 //  	ans+= "<p>" + items[i] + "</p" ; 
	 //  }
	 //  $( ".avail" ).html( ans );
		// });
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