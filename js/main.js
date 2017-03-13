$(document).ready(function(){
	var index = {
		init:function(){
			var _this = this;
			_this.begin();
			_this.carousel();
			/*$("#totalContainer").carousel({
	            totalFrame: 20,
	            interval: 10,
	            delayed: 2000,
	            visibleNum: 2, //展区的图片数目；
	            everyScroll: 1 //每次滚动的图片数目；
	        });*/
		},
		begin:function(){
			$(".head .title").addClass("down");
		},
		carousel:function(){
			var i = 0;
			var visible = $("#visible");
	        var items = visible.find("li");
	        var width = items.width();  //图片的宽度
	        var p_num = items.length;  //总的图片的数目
	        var prevButton = visible.find(".prev");
            var nextButton = visible.find(".next");
	        var movePlace = visible.find("ul");
	            movePlace.css("width",p_num*510+"px");  //其中10是间隔

	        visible.hover(function(){
                clearInterval(timeout);
            },function(){
                timeout = setInterval(scroll, 2000);
        	}).trigger("mouseleave");

	        var moveWidth = 510;
        	nextButton.click(function(){
        		if (!movePlace.is(":animated")) {
        			if (i === (p_num-2)) {
		                movePlace.animate({left:0+"px"},500);
		                i = 0;
		            }else{
		                movePlace.animate({left:'-='+moveWidth+"px"},500,function(){
		                }); 
		               i++;
		            }
        		}
        		
        	})

        	prevButton.click(function(){
        		if (!movePlace.is(":animated")) {
        			if (i === 0) {
		                movePlace.animate({left:-(p_num-2)*moveWidth+"px"},500);
		                i = p_num-2;
		            }else{
		                movePlace.animate({left:'+='+moveWidth+"px"},500,function(){
		                }); 
		               i--;
		            }
        		}
        		
        	})

	        
        	function scroll(){
	            if (i === (p_num-2)) {
	                movePlace.animate({left:0+"px"},500);
	                i = 0;
	            }else{
	                movePlace.animate({left:'-='+moveWidth+"px"},500,function(){
	                }); 
	               i++;
	            }
        	}
		}
	}
	index.init();
})