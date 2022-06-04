var doc_footer=document.getElementById('DocFooter');
var fixed_footer=document.getElementById('FixedFooter');
fixed_footer.innerHTML=doc_footer.innerHTML;
var normal_display_doc_footer=doc_footer.style.display;
var normal_display_fixed_footer=fixed_footer.style.display;
var inner_doc_footer=document.createElement('div');
inner_doc_footer.id="InnerDocFooter";
inner_doc_footer.innerHTML=doc_footer.innerHTML;
doc_footer.innerHTML="";
doc_footer.appendChild(inner_doc_footer);
var block=document.createElement('div');
block.id='Block';
block.innerHTML="";
doc_footer.appendChild(block);
var a=inner_doc_footer.scrollHeight+16*5;
block.style.height=a+"px";
var normal_display_block=block.style.display;
const doct=window.document.documentElement;
function hide_doc_footer(){
	inner_doc_footer.style.display="none";
}
function hide_fixed_foter(){
	fixed_footer.style.display="none";
}
function show_doc_foter(){
	inner_doc_footer.style.display=normal_display_doc_footer;
}
function show_fixed_footer(){
	fixed_footer.style.display=normal_display_fixed_footer;
}
function hide_block(){
	block.style.display="none";
}
function show_block(){
	block.style.display=normal_display_block;
}
function test()
{
	block.style.borderStyle="solid";
	block.style.borderColor="#00FF00"
	inner_doc_footer.style.borderStyle="solid";
	inner_doc_footer.style.borderColor="#00FF00";
}
//test();
hide_block();
hide_fixed_foter();
show_doc_foter();
var footer_height=inner_doc_footer.scrollHeight;
window.addEventListener("scroll",function(){
	if(inner_doc_footer.style.display!="none")
	{
		//alert(inner_doc_footer.offsetTop+footer_height);
		//alert(doct.clientHeight+doct.scrollTop+1);
		if(inner_doc_footer.offsetTop+footer_height<=doct.clientHeight+doct.scrollTop+2){
			//此处if表达式最后一数字根据屏幕大小不同改变。不同大小下不同数字动态效果最优。考虑做成动态
			show_block();
			show_fixed_footer();
			hide_doc_footer();
		}
	}else{
		if(block.offsetTop>doct.clientHeight+doct.scrollTop-inner_doc_footer.offsetHeight-footer_height){
			//alert(block.offsetTop+inner_doc_footer.offsetHeight);
			//alert(doct.clientHeight+doct.scrollTop);
			hide_block();
			hide_fixed_foter();
			show_doc_foter();
		}
	}
},false)