// Class untuk Pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon, kendaraanDisewa) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = kendaraanDisewa;
    }
}

// Class SistemManajemenTransportasi
class SistemManajemenTransportasi {
    constructor() {
        this.daftarPelanggan = [];
    }
    
    // Metode untuk mencatat transaksi penyewaan
    tambahPelanggan(pelanggan) {
        this.daftarPelanggan.push(pelanggan);
        this.tampilkanDaftarPelanggan();
        this.simpanKeLocalStorage();
    }
    
    // Metode untuk menghapus pelanggan
    hapusPelanggan(index) {
        this.daftarPelanggan.splice(index, 1);
        this.tampilkanDaftarPelanggan();
        this.simpanKeLocalStorage();
    }
    
    // Metode untuk menampilkan daftar pelanggan
    tampilkanDaftarPelanggan() {
        const daftarElement = document.getElementById('daftarPelanggan');
        daftarElement.innerHTML = '';
        
        this.daftarPelanggan.forEach((pelanggan, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${pelanggan.nama}</td>
                <td>${pelanggan.nomorTelepon}</td>
                <td>${pelanggan.kendaraanDisewa}</td>
                <td><button class="btn btn-danger btn-sm" onclick="sistem.hapusPelanggan(${index})">Hapus</button></td>
            `;
            daftarElement.appendChild(row);
        });
    }
    
    // Metode untuk menyimpan data ke localStorage
    simpanKeLocalStorage() {
        localStorage.setItem('daftarPelanggan', JSON.stringify(this.daftarPelanggan));
    }
    
    // Metode untuk memuat data dari localStorage
    muatDariLocalStorage() {
        const data = localStorage.getItem('daftarPelanggan');
        if (data) {
            this.daftarPelanggan = JSON.parse(data);
            this.tampilkanDaftarPelanggan();
        }
    }
}

// Inisialisasi sistem
const sistem = new SistemManajemenTransportasi();

// Event listener untuk form
document.getElementById('formPelanggan').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const nomorTelepon = document.getElementById('nomorTelepon').value;
    const kendaraan = document.getElementById('kendaraan').value;
    
    const pelanggan = new Pelanggan(nama, nomorTelepon, kendaraan);
    sistem.tambahPelanggan(pelanggan);
    
    // Reset form
    this.reset();
});

// Muat data saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    sistem.muatDariLocalStorage();
});