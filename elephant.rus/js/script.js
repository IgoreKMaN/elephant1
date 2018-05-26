 $(document).ready(function () {

 	margin_value_height = $(".main-header").height()
 		$(".mobile_menu_all_display .all_menu ul").css("margin-top", margin_value_height)



 	$(".mobile-menu .line img").click(function() {
 		if ($(".mobile_menu_all_display").hasClass("off")) {

 			$(".mobile-menu .line #img1").css({"transform":"rotate(90deg)",
 											"opacity":"0",
 											"transition": "0.7s",
 											"z-index": "-1"})
 		$(".mobile-menu .line #img2").css({"transform":"rotate(-90deg)",
 											"opacity":"1",
 											"transition": "1s",
 											"z-index": "1"
 										})
 		$(".subscribe").css({"z-index":"-1"})
 		$(".mobile_menu_all_display").fadeIn("fast")
 		$(".mobile_menu_all_display").removeClass("off")
 		$(".mobile_menu_all_display").addClass("on")

 		} else {

 			$(".mobile-menu .line #img1").css({"transform":"rotate(-180deg)",
 											"opacity":"1",
 											"transition": "1s",
 											"z-index": "1"})
 		$(".mobile-menu .line #img2").css({"transform":"rotate(90deg)",
 											"opacity":"0",
 											"transition": "0.7s",
 											"z-index": "-1"
 										})
 		$(".subscribe").css({"z-index":"0"})
 		$(".mobile_menu_all_display").fadeOut("first")
 		$(".mobile_menu_all_display").removeClass("on")
 		$(".mobile_menu_all_display").addClass("off")

 		}

 		


 		
 	})


 });	