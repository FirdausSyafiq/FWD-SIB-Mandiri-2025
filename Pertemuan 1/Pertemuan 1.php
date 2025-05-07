<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Processing dan Struktur Kendali</title>
    <style>
        body {
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }

        h1 {
            text-align: center;
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
        .result {
            margin-top: 20px;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
            background-color: #f9f9f9;
        }
        .success {
            color: green;
            font-weight: bold;
        }
        .remedial {
            color: red;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Form Input Nilai</h1>
    
    <?php
    // Inisialisasi variabel
    $nama = $email = $nilai = "";
    $status = "";
    $showResult = false;
    
    // Cek apakah form sudah disubmit
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Ambil nilai dari form
        $nama = htmlspecialchars($_POST["nama"]);
        $email = htmlspecialchars($_POST["email"]);
        $nilai = htmlspecialchars($_POST["nilai"]);
        
        // Validasi input
        $valid = true;
        
        if (empty($nama)) {
            echo "<p style='color: red;'>Nama harus diisi!</p>";
            $valid = false;
        }
        
        if (empty($email)) {
            echo "<p style='color: red;'>Email harus diisi!</p>";
            $valid = false;
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "<p style='color: red;'>Format email tidak valid!</p>";
            $valid = false;
        }
        
        if (empty($nilai)) {
            echo "<p style='color: red;'>Nilai ujian harus diisi!</p>";
            $valid = false;
        } elseif (!is_numeric($nilai)) {
            echo "<p style='color: red;'>Nilai ujian harus berupa angka!</p>";
            $valid = false;
        }
        
        // Jika semua input valid, proses struktur kendali
        if ($valid) {
            $showResult = true;
            
            // Struktur kendali untuk menentukan status kelulusan
            if ($nilai >= 70) {
                $status = "Lulus";
                $statusClass = "success";
            } else {
                $status = "Remedial";
                $statusClass = "remedial";
            }
        }
    }
    ?>
    
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <div class="form-group">
            <label for="nama">Nama:</label>
            <input type="text" id="nama" name="nama" value="<?php echo $nama; ?>">
        </div>
        
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" value="<?php echo $email; ?>">
        </div>
        
        <div class="form-group">
            <label for="nilai">Nilai Ujian:</label>
            <input type="number" id="nilai" name="nilai" min="0" max="100" value="<?php echo $nilai; ?>">
        </div>
        
        <button type="submit">Proses</button>
    </form>
    
    <?php if ($showResult): ?>
    <div class="result">
        <h2>Hasil Pemrosesan</h2>
        <p><strong>Nama:</strong> <?php echo $nama; ?></p>
        <p><strong>Email:</strong> <?php echo $email; ?></p>
        <p><strong>Nilai Ujian:</strong> <?php echo $nilai; ?></p>
        <p><strong>Status:</strong> <span class="<?php echo $statusClass; ?>"><?php echo $status; ?></span></p>
    </div>
    <?php endif; ?>
</body>
</html>