var bkimg_arr=[];
var base_src="../img/NormalStyle/RandomBKImg/";
bkimg_arr[0]=base_src+"1.jpg";
bkimg_arr[1]=base_src+"2.jpg";
bkimg_arr[2]=base_src+"3.gif";
bkimg_arr[3]=base_src+"4.jpg";
var bkimg_num=Math.round(Math.random()*3);
document.body.style.backgroundImage="url('"+bkimg_arr[bkimg_num]+"')";