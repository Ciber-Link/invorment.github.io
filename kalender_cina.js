function kirim_datac() {
tglc=document.getElementById("tglc").value;
blnc=document.getElementById("blnc").value;
thnc=document.getElementById("thnc").value;
var xhr = new XMLHttpRequest();
xhr.open('GET', 'kalender_cina.php?tglc='+tglc+'&blnc='+blnc+'&thnc='+thnc, true);
xhr.onload = function () {
    // do something to response	
    document.getElementById("hasilc").innerHTML = this.responseText;

};
xhr.send(); 
return false;
}
