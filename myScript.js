function init(){
closeSidebar();

}


function openSidebar() {
if(document.getElementById("mySidebar").style.display == "block"){
document.getElementById("mySidebar").style.display = "none";
document.getElementById("content").style="margin-left:0px";
document.getElementById("mySidebar").style="margin-top:90px";

}else
if(document.getElementById("mySidebar").style.display == "none"){
document.getElementById("mySidebar").style.display = "block";
document.getElementById("content").style="margin-left:200px";
 document.getElementById("mySidebar").style="margin-top:00px";

}
 
}

function closeSidebar() {
document.getElementById("mySidebar").style.display = "none";
document.getElementById("content").style="margin-left:0px";


}

