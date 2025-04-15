function kirim_data() {
var data = new FormData();
tgl=document.getElementById("tgl").value;
bln=document.getElementById("bln").value;
thn=document.getElementById("thn").value;
data.append('tgl', tgl);
data.append('bln', bln);
data.append('thn', thn);
var xhr = new XMLHttpRequest();
xhr.open('POST', 'konversi.php', true);
xhr.onload = function () {
    // do something to response
    document.getElementById("hasil").innerHTML = this.responseText;
};
xhr.send(data);return false;}
