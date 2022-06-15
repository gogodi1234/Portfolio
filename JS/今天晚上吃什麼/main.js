
var arr=["images/拉麵.jpg","images/滷肉飯.jpg","images/水餃.JPG"]

$(function(){
    let food=new Image(500,300);
    $("input").on("click",function(){
    //alert("Hi");
    var numberOfListItem = $("li").length;
    var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
    $("h1").text($("li").eq(randomChildNumber).text());
    console.log(randomChildNumber);
    food.src=arr[randomChildNumber];
    document.body.appendChild(food);
    });
});
    
    