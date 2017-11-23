/**
 * Created by sunxiaomei on 15/6/1.
 */
TY(function(){
    var c=document.getElementById("cover");
    var ctx=c.getContext("2d"); 
    ctx.save();
    var bg = document.getElementById("bg");
    bg.onload = function(){
        ctx.drawImage(bg,0,0);
    }
    

    TY("#create").click(function(){
        var getter = TY.trim(TY(".receiver").val());
        var author = TY.trim(TY(".author").val());
        if (getter == '') {
            TY.loader('TY.m.message',function(mod){
                var a = mod.modalbox({
                    text:"请输入想赠送的人",
                    width:"720px"
                });
                setTimeout(function(){TY.m.message.modalbox.hide(a)},2000);
            });
            return;
        }
        if (author == '') {
            TY.loader('TY.m.message',function(mod){
                var a = mod.modalbox({
                    text:"请输入你的名字",
                    width:"720px"
                });
                setTimeout(function(){TY.m.message.modalbox.hide(a)},2000);
            });
            return;
        }
        ctx.rotate( (Math.PI / 180) * -6); // 旋转30弧度 
        ctx.font="25px Microsoft Yahei";
        ctx.fillStyle = "#545454";
        ctx.fillText(getter,72,238);
        ctx.fillText(author,338,595);
        var image = new Image();
        image.src = c.toDataURL("image/png");
        var tips ='<p class="tips">温馨提示：手机屏幕长按可保存图片哦~</p>'
        TY("body").html(tips).append(image);
    })
    
})



