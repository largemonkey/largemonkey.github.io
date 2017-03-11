$(document).ready(function(){
	var index = {
		init:function(){
			var _this = this;
			_this.begin();
			$("#totalContainer").carousel({
	            totalFrame: 20,
	            interval: 10,
	            delayed: 2000,
	            visibleNum: 2, //展区的图片数目；
	            everyScroll: 1 //每次滚动的图片数目；
	        });
		},
		begin:function(){
			$(".head .title").addClass("down");
		}
	}
	index.init();
})