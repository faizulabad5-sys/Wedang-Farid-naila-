// =============================
// Nama Tamu dari Link
// Contoh:
// website.com/?to=Budi
// =============================

const params = new URLSearchParams(window.location.search);

const guest = document.getElementById("guest");

if(guest){
    guest.innerHTML = params.get("to") || "Tamu Undangan";
}


// =============================
// Tombol Buka Undangan
// =============================

function bukaUndangan(){

    document.getElementById("cover").style.display="none";

    document.getElementById("content").style.display="block";

    document.getElementById("musik").play();

    window.scrollTo(0,0);

}


// =============================
// Countdown
// =============================

const target = new Date("December 20, 2026 09:00:00").getTime();

setInterval(function(){

    const now = new Date().getTime();

    const distance = target - now;

    if(distance < 0){

        document.getElementById("timer").innerHTML="Acara Sedang Berlangsung";

        return;

    }

    const hari = Math.floor(distance/(1000*60*60*24));

    const jam = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const menit = Math.floor((distance%(1000*60*60))/(1000*60));

    const detik = Math.floor((distance%(1000*60))/1000);

    document.getElementById("timer").innerHTML =
    hari+" Hari " +
    jam+" Jam " +
    menit+" Menit " +
    detik+" Detik";

},1000);


// =============================
// Tombol Salin Rekening
// =============================

const tombol = document.querySelector(".gift button");

if(tombol){

    tombol.addEventListener("click",function(){

        navigator.clipboard.writeText("1234567890");

        alert("Nomor rekening berhasil disalin.");

    });

}