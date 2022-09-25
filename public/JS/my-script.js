let listGambar = document.getElementsByTagName("ol");
listGambar[0].addEventListener("click",tampilkan);

function tampilkan(event){
    alert("Cek gambar"+event.target.innerHTML);
}
