(function($){
    $.fn.extend({
        carousel:function(options){
        var defaults = {
            totalFrame: 20,
            interval: 10,
            delayed: 2000,
            everyScroll: 1 //每次滚动的图片数目；
        }
        var options = $.extend({}, defaults, options);
        var o = options;
        var obj = $(this);
            obj.css("padding", o.totalFrame+"px");
        var visible = obj.find("#visible");
        var items = obj.find("li");
        var width = items.width();  //图片的宽度
        items.css("marginRight", o.interval+"px");
        var height = items.height();//图片的高度
        var i = items.length;  //总的图片的数目
        var moveDistance = o.everyScroll * width + (o.everyScroll - 1) * o.interval;
        var movePlace = visible.find("ul");
            movePlace.css("width",i*width+i* o.interval+"px");
            function carousel(){
                movePlace.animate({left:-moveDistance+"px"},500,function(){
                    movePlace.css("left","0px");
                    for(j=0;j< o.everyScroll;j++){
                        movePlace.find("li").eq(0).appendTo(movePlace);
                    }
                });
            }
            obj.hover(function(){
                clearInterval(timeout);
            },function(){
                timeout = setInterval(carousel, o.delayed);
            }).trigger("mouseleave"); //先实行一次离开先，要不像上面那样会出错。//先将轮播事件捆绑到离开发生，这样不会乱。

            var prevButton = obj.find(".prev");
            var nextButton = obj.find(".next");



        }
    });
})(jQuery)