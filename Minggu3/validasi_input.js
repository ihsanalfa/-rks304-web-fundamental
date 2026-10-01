document.getElementById('registerForm').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const nama = document.getElementById('nama').value.trim();
    const tgl_lahir = document.getElementById('tgl_lahir').value;
    const alamat = document.getElementById('alamat').value.trim();
    const telepon = document.getElementById('telepon').value.trim();

    let errorMessages = [];

    if (!username || username.length < 3) errorMessages.push("Username tidak boleh kosong dan panjang minimal 3 karakter.");
    if (!password || password.length < 8) errorMessages.push("Password tidak boleh kosong dan panjang minimal 8 karakter.");
    if (!nama) errorMessages.push("Nama tidak boleh kosong.");
    
    if (!tgl_lahir) {
        errorMessages.push("Tanggal lahir tidak boleh kosong.");
    } else {
        const inputDate = new Date(tgl_lahir);
        const today = new Date();
        today.setHours(0, 0, 0, 0); 
        if (inputDate > today) errorMessages.push("Tanggal lahir tidak boleh future date.");
    }

    if (!alamat) errorMessages.push("Alamat tidak boleh kosong.");
    if (!telepon || !telepon.startsWith('62')) errorMessages.push("Nomor telpon tidak boleh kosong dan harus berawalan dari 62.");

    if (errorMessages.length > 0) {
        event.preventDefault(); 
        
    
        const errorList = document.getElementById('errorList');
        errorList.innerHTML = ''; // Kosongkan list sebelumnya
        errorMessages.forEach(msg => {
            const li = document.createElement('li');
            li.textContent = msg;
            errorList.appendChild(li);
        });

      
        document.getElementById('errorModal').classList.remove('hidden');
    }
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('errorModal').classList.add('hidden');
});