// JavaScript untuk Efek Scroll dan Slider
document.addEventListener("DOMContentLoaded", function() {
    // Efek Scroll untuk Header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled'); // Kecilkan header dan tambahkan bayangan saat discroll
        } else {
            header.classList.remove('scrolled'); // Hapus bayangan dan atur ulang ukuran saat berada di atas
        }
    });
});

// Fungsionalitas Slider
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); // Ganti gambar setiap 3 detik
}

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.navigasi ul');

menuToggle.addEventListener('click', () => {
   menuToggle.classList.toggle('active');
   navMenu.classList.toggle('active');
});


// Fungsi dropdown untuk Education Section
document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.getElementById("educationDropdown");
    const educationBoxes = document.querySelectorAll(".education-boxes div");

    // Fungsi untuk menampilkan/menyembunyikan education boxes berdasarkan pilihan dropdown
    dropdown.addEventListener("change", function() {
        const selectedValue = dropdown.value;

        // Ulangi education boxes dan tampilkan/sembunyikan
        educationBoxes.forEach(box => {
            if (selectedValue === "all") {
                box.style.display = "block"; // Tampilkan semua boxes
            } else if (box.id === selectedValue) {
                box.style.display = "block"; // Menampilkan hanya box pilihan
            } else {
                box.style.display = "none"; // Sembunyikan box lainnya
            }
        });
    });

    // Tetapkan status awal untuk menampilkan semua kotak
    dropdown.value = "all";
    educationBoxes.forEach(box => {
        box.style.display = "block";
    });
});

function showPopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "block";
}

function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "none";
}


// Menambahkan event listeners untuk tombol flip dan close
document.querySelectorAll('.flip-button').forEach(button => {
    button.addEventListener('click', function() {
        flipCard(this);
    });
});

document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', function() {
        closeCard(this);
    });
});

// JavaScript untuk mengubah kelas dropdown saat diklik
document.querySelectorAll('.dropdown .dropbtn').forEach(button => {
    button.addEventListener('click', function() {
        const dropdown = this.parentElement;

        // Toggle class 'active' untuk dropdown yang di-klik
        dropdown.classList.toggle('active');

        // Tutup dropdown lain yang terbuka
        document.querySelectorAll('.dropdown').forEach(item => {
            if (item !== dropdown) {
                item.classList.remove('active');
            }
        });
    });
});

// Fungsi untuk memutar kartu ke belakang saat tombol 'Lihat Detail' diklik
function flipCard(button) {
    const card = button.closest('.card'); // Ambil elemen kartu terdekat
    card.classList.add('flipped'); // Tambahkan kelas 'flipped' untuk memutar kartu
}

// Fungsi untuk memutar kartu kembali ke depan saat tombol 'X' diklik
function closeCard(button) {
    const card = button.closest('.card'); // Ambil elemen kartu terdekat
    card.classList.remove('flipped'); // Hapus kelas 'flipped' untuk mengembalikan kartu ke depan
}


// Dark Mode Toggle
const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
}
document.querySelector('.theme-switcher').addEventListener('click', toggleTheme);

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('form-message').textContent = 'Thank you for your message!';
        document.getElementById('form-message').style.color = 'green';
    } else {
        document.getElementById('form-message').textContent = 'Please fill out all fields.';
        document.getElementById('form-message').style.color = 'red';
    }
});

// JavaScript untuk Toggle Menu
function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    menu.classList.toggle("active");

    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
    });
    
}
