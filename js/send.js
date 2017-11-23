/**
 * Created by sunxiaomei on 15/6/1.
 */
$(function(){
    var c=document.getElementById("cover");
    var ctx=c.getContext("2d"); 
    ctx.save();
    var bg = document.getElementById("bg");
    bg.onload = function(){
        ctx.drawImage(bg,0,0);
    }
    

    $("#create").click(function(){
        var getter = $.trim($(".receiver").val());
        var author = $.trim($(".author").val());
        if (getter == '') {
            alert("请输入你要送的人")
            return;
        }
        if (author == '') {
            alert("请输入你的名字")
            return;
        }
        ctx.rotate( (Math.PI / 180) * -6); // 旋转30弧度 
        ctx.font="25px Microsoft Yahei";
        ctx.fillS$le = "#545454";
        ctx.fillText(getter,72,238);
        ctx.fillText(author,338,595);
        var image = new Image();
        image.src = c.toDataURL("image/png");
        var tips ='<p class="tips">温馨提示：手机屏幕长按可保存图片哦~</p>'
        $("body").html(tips).append(image);
    })
    
})



