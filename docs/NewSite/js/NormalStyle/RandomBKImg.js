var img_size=5;
var bkimg_arr=[];
var base_src="../img/NormalStyle/RandomBKImg/GIFImg/";
for(var i=1;i<=img_size;i++){
	bkimg_arr[i-1]=base_src+i.toString()+".gif";
}
var bkimg_num=Math.round(Math.random()*(img_size-1));
document.body.style.backgroundImage="url('"+bkimg_arr[bkimg_num]+"')";