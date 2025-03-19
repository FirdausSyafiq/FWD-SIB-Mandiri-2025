let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

function tampilkanProduk() {
    let daftarProduk = document.getElementById("daftar-produk");
    daftarProduk.innerHTML = "";
    produkToko.forEach(produk => {
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.innerText = `ID: ${produk.id}, Nama: ${produk.nama}, Harga: Rp.${produk.harga}, Stok: ${produk.stok}`;
        daftarProduk.appendChild(li);
    });
}

function tambahProduk() {
    let nama = document.getElementById("nama").value;
    let harga = parseInt(document.getElementById("harga").value);
    let stok = parseInt(document.getElementById("stok").value);

    if (nama && harga && stok) {
        let id = produkToko.length ? produkToko[produkToko.length - 1].id + 1 : 1;
        produkToko.push({ id, nama, harga, stok });
        tampilkanProduk();
        document.getElementById("nama").value = "";
        document.getElementById("harga").value = "";
        document.getElementById("stok").value = "";
    } else {
        alert("Harap isi semua data produk!");
    }
}

function hapusProduk() {
    let id = parseInt(document.getElementById("idProduk").value);
    if (!id) {
        alert("Masukkan ID produk yang ingin dihapus!");
        return;
    }
    
    let index = produkToko.findIndex(produk => produk.id === id);
    if (index !== -1) {
        produkToko.splice(index, 1);
        tampilkanProduk();
        document.getElementById("idProduk").value = "";
    } else {
        alert("Produk dengan ID tersebut tidak ditemukan!");
    }
}

document.addEventListener("DOMContentLoaded", tampilkanProduk);