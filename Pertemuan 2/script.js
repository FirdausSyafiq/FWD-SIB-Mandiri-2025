document.getElementById("pegawaiForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nama = document.getElementById("nama").value;
    let umur = document.getElementById("umur").value;
    let jabatan = document.getElementById("jabatan").value;
    let status = document.getElementById("status").value;
    
    tambahPegawai(nama, umur, jabatan, status);
    
    document.getElementById("pegawaiForm").reset();
});

// Fungsi untuk menambahkan pegawai ke tabel
function tambahPegawai(nama, umur, jabatan, status) {
    let gajiPokok = jabatan === "Manajer" ? 15000000 :
                    jabatan === "Asisten Manajer" ? 10000000 :
                    5000000;
    let tunjanganJabatan = 0.15 * gajiPokok;
    let bpjs = 0.10 * gajiPokok;
    let tunjanganKeluarga = status === "Menikah" ? 0.20 * gajiPokok : 0;
    let totalGaji = gajiPokok + tunjanganJabatan + bpjs + tunjanganKeluarga;

    let tableBody = document.getElementById("pegawaiTableBody");
    let newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${nama}</td>
        <td>${umur}</td>
        <td>${jabatan}</td>
        <td>${status}</td>
        <td>Rp ${gajiPokok.toLocaleString()}</td>
        <td>Rp ${tunjanganJabatan.toLocaleString()}</td>
        <td>Rp ${bpjs.toLocaleString()}</td>
        <td>Rp ${tunjanganKeluarga.toLocaleString()}</td>
        <td>Rp ${totalGaji.toLocaleString()}</td>
        <td class="text-center">
            <button class="btn btn-danger btn-sm" onclick="hapusBaris(this)">Hapus</button>
        </td>
    `;
}

// Fungsi untuk menghapus baris dari tabel dengan konfirmasi
function hapusBaris(button) {
    let konfirmasi = confirm("Apakah Anda yakin ingin menghapus data ini?");
    if (konfirmasi) {
        let row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
}

// Event listener untuk tombol Reset Form
document.getElementById("resetForm").addEventListener("click", function() {
    document.getElementById("pegawaiForm").reset();
});

// Menambahkan pegawai default "Dodi Prayodi" saat halaman dimuat
window.onload = function() {
    tambahPegawai("Dodi Prayodi", 25, "Manajer", "Menikah");
};