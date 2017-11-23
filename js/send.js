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
        var reason = $.trim($(".reason").val());
        if (getter == '') {
            alert("请输入对她的称呼");
            return;
        }
        if (author == '') {
            alert("请输入你的名字");
            return;
        }
        if (reason == '') {
            alert("请输入理由");
            return;
        }
        ctx.font="23px Microsoft Yahei";
        ctx.fillStyle = "#fff";
        ctx.fillText(getter,30,60);
        ctx.fillText(author,582,425);
        ctx.font="30px Microsoft Yahei";
        ctx.fillText(reason,448,150);
        var image = new Image();
        image.src = c.toDataURL("image/png");
        var tips ='<p class="tips">温馨提示：手机屏幕长按可保存图片哦~</p>'
        $("body").html(tips).append(image);
    })
    
})



