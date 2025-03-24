// **Data Produk**
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Tablet", harga: 7000000 },
    { id: 4, nama: "Smartwatch", harga: 2000000 },
    { id: 5, nama: "Kamera", harga: 8000000 }
];

// Event Listener
const eventHandler = {
    tambah: (id, nama, harga) => tambahProduk(id, nama, harga),
    hapus: (id) => hapusProduk(id),
    tampil: () => tampilkanProduk()
};

// **Menambahkan Produk dengan Spread Operator**
function tambahProduk(id, nama, harga) {
    produkList = [...produkList, { id, nama, harga }];
}

// **Menghapus Produk dengan Rest Parameter**
function hapusProduk(id) {
    produkList = produkList.filter(produk => produk.id !== id);
}

// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
    console.log("Daftar Produk:");
    produkList.forEach(({ id, nama, harga }) => {
        console.log(`ID: ${id}, Nama: ${nama}, Harga: ${harga}`);
    });
}

// Contoh Penggunaan
eventHandler.tampil(); // Menampilkan produk awal
eventHandler.tambah(6, "Headphone", 1500000); // Menambahkan produk baru
eventHandler.tampil(); // Menampilkan produk setelah penambahan
eventHandler.hapus(2); // Menghapus produk dengan ID 2
eventHandler.tampil(); // Menampilkan produk setelah penghapusan
