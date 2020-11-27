//ClickText
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
var a_idx = 0;
jQuery(document).ready(function($)
{
    $("body").click(function(e)
    {
        var a = new Array("loli控","NTR", "死宅", "PRPR", "人活着就是为了樱岛麻衣", "HENTAI","妹控", "GALGAME", "素股","二次元");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1)% a.length;
        var x = e.pageX, y = e.pageY,color=randomColor;
        $i.css(
        {
            "z-index" : 99999999999999,
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
});

//body
var body=document.body,p=document.getElementsByClassName("headline"),br=document.createElement("br");
var img_url='animeSource/bg'+Math.round(Math.random()*100)%6+'.jpg';
body.style.backgroundImage='url("'+img_url+'")';
var img=document.createElement("img");img.src=img_url;
img.onload=function()
{
    if(window.innerWidth/window.innerHeight>img.width / img.height)
        body.style.animation="backgroundW 3s";
    else body.style.animation="backgroundH 3s";
};
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
    p[i].parentElement.nextElementSibling.style.display="none";
};
anime_total.innerHTML="已经看完"+document.getElementsByClassName("anime").length+"部番剧";
movie_total.innerHTML="已经看完"+document.getElementsByClassName("movie").length+"部电影/剧场版";