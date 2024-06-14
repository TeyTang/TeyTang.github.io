function init(){
document.getElementById("content").style="margin-left:200px";


document.getElementById("mySidebar").style="margin-top:90px";
openSidebar();
  document.getElementById("content").style.width-=200px;

}


function openSidebar() {
if(document.getElementById("mySidebar").style.display == "block"){
document.getElementById("mySidebar").style.display = "none";
document.getElementById("content").style="margin-left:0px";
  document.getElementById("content").style.width-=200px;


}else
if(document.getElementById("mySidebar").style.display == "none"){
document.getElementById("mySidebar").style.display = "block";
document.getElementById("content").style="margin-left:200px";
 document.getElementById("content").style.width+=200px;

}
 
}

function closeSidebar() {
document.getElementById("mySidebar").style.display = "none";
document.getElementById("content").style="margin-left:0px";
 document.getElementById("content").style.width+=200px;


}

