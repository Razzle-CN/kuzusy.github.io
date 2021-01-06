//somev
var body=document.body;
var bgImgId=Math.round(Math.random()*100)%7;

//json
for(var i=0 in json)
{
    var text='<h3><span class="headline '+json[i].type+'"><font>●</font>'
        +json[i].name+'</span></h3>';
    text=text+'\n<div style="display:none;">';
    text=text+'\n<p class="producer basicInf"><b>动画制作</b>:<i>'
        +json[i].producer+'</i></p>';
    text=text+'\n<p><a href="'+json[i].site+
        '" class="site basicInf"><b>官网ClickHere</b></a></p>';
    for(var j=0 in json[i].charactor)
        text=text+"\n<a>"+json[i].charactor[j].name+"</a><br>";
    text=text+'\n<p class="review"><b>'+json[i].review+'</b></p>';
    $("#"+json[i].time).append(text);
}

//fucktion
function randomColor()
{
    var colArr = new Array('7','8','9','a','b','c','d','e','f');
    var color = '';
    for(var i = 0;i<6;i++)
    {
        var random = Math.floor(Math.random()*9);
        color+=colArr[random];
    }
    return "#"+color;
}
function changeBackground()
{
    var img_url='pic/bg'+bgImgId+'.jpg';
    body.style.backgroundImage='url("'+img_url+'")';
    var img=document.createElement("img");img.src=img_url;
    img.onload=function()
    {
        if(window.innerWidth/window.innerHeight>img.width / img.height)
            body.style.animation="backgroundW 3s";
        else
            body.style.animation="backgroundH 3s";
    };
    bgImgId=(bgImgId+1)%7;
}

//jq
var a_idx = 0;
jQuery(document).ready(function($)
{
    onkeydown=function(event) {
        if(event.which==13)changeBackground();
    }
    $("body").click(function(e)
    {
        var a = new Array("loli控","NTR", "死宅", "PRPR", "人活着就是为了樱岛麻衣", "HENTAI","妹控", "GALGAME", "素股","二次元");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1)% a.length;
        var x = e.pageX, y = e.pageY,color=randomColor;
        $i.css(
        {
            "z-index" : 99999999,
            "top" : y - 20,
            "left" : x,
            "position" : "absolute",
            "font-weight" : "bold",
            "color" : color
        });
        $("body").append($i);
        $i.animate(
        {
            "top" : y - 180,
            "opacity" : 0
        }, 1500, function()
        {
            $i.remove();
        });
    });
    $("#Filo").hover(function(e)
    {
        $("#charaPic").stop(1);
        charaPic.src="pic/Filo.png";
        $("#charaPic").animate({opacity:1});
    },function(e)
    {
        $("#charaPic").animate({opacity:0});
    });
    $("#Sagiri").hover(function(e)
    {
        $("#charaPic").stop(1);
        if(charaPic.src!="pic/Sagiri.gif")charaPic.src="pic/Sagiri.gif";
        $("#charaPic").animate({opacity:1});
    },function(e)
    {
        $("#charaPic").animate({opacity:0});
    });
});

//body
var p=document.getElementsByClassName("headline"),br=document.createElement("br");
changeBackground();
for(i=0;i<p.length;i++)
{
    p[i].onclick = function()
    {
        var bro=this.parentElement.nextElementSibling;
        if(bro.style.display=="none")
	        bro.style.display="block";
        else bro.style.display="none";
    };
    p[i].style.cursor="default";
}
allclose.onclick = function()
{
    var p=document.getElementsByClassName("headline");
    for(i=0;i<p.length;i++)
    p[i].parentElement.nextElementSibling.style.display="block";
};
timeOrder.onclick = function()
{

}
anime_total.innerHTML="已经看完"+document.getElementsByClassName("anime").length+"部番剧";
movie_total.innerHTML="已经看完"+document.getElementsByClassName("movie").length+"部电影/剧场版";