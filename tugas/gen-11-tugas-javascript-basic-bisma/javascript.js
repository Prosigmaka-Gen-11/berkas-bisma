// Fungsi perkalian
function perkalian(a, b) {
    return a*b
}

const a = parseInt(prompt("Input angka berapapun: ")) 
const b = parseInt(prompt("Input angka berapapun sekali lagi: ")) 

// Tipe data object

const biodata = {
    nama: "Juned",
    umur: 20,
    riwayatPendidikan: {
        SD: "SD Margahayu 1",
        SMP: "SMP Cendrawasih 2",
        SMA: "SMA Cirebon 2"
    },
    hasilPerkalian: perkalian(a, b)
}

console.log(biodata.hasilPerkalian)
