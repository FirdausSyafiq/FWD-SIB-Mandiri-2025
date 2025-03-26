import users from "./data.mjs";

const index = () => {
    const userTable = document.getElementById("userTable");
    userTable.innerHTML = "";

    users.map((user, index) => {
        let row = `<tr>
            <td>${user.nama}</td>
            <td>${user.umur}</td>
            <td>${user.alamat}</td>
            <td>${user.email}</td>
            <td class="text-center">
                <button class="btn btn-danger btn-sm" onclick="deleteUser('${user.nama}')">Hapus</button>
            </td>
        </tr>`;
        userTable.innerHTML += row;
    });
};

const store = (user) => {
    users.push(user);
    console.log(`Data ${user.nama} berhasil ditambahkan.`);
};

const destroy = (nama) => {
    const index = users.findIndex(user => user.nama === nama);
    if (index !== -1) {
        users.splice(index, 1);
        console.log(`Data ${nama} berhasil dihapus.`);
    } else {
        console.log(`Data ${nama} tidak ditemukan.`);
    }
};

export { index, store, destroy };