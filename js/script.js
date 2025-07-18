// ===============================
// Fungsi sapaan nama & tampilkan dari localStorage
// ===============================
function greetUser() {
  const input = document.getElementById("nameInput");
  const name = input.value.trim();
  const output = document.getElementById("username");

  if (name !== "") {
    output.textContent = name;
    localStorage.setItem("userName", name);
  } else {
    output.textContent = "Teman";
    localStorage.removeItem("userName");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // ===============================
  // Tampilkan sapaan dari localStorage saat halaman dimuat
  // ===============================
  const welcomeText = document.getElementById("welcomeText");
  if (welcomeText) {
    const name = localStorage.getItem("userName");
    if (name) {
      welcomeText.textContent = `Hai, ${name}! Selamat datang di portofolio saya.`;
    }
  }

  // ===============================
  // Toggle navbar
  // ===============================
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("navbar-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }

  // ===============================
  // Validasi form kontak
  // ===============================
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Mencegah reload

      const nama = document.getElementById("nama").value.trim();
      const email = document.getElementById("email").value.trim();
      const pesan = document
        .querySelector("textarea[name='pesan']")
        .value.trim();

      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const messageError = document.getElementById("messageError");

      nameError.textContent = "";
      emailError.textContent = "";
      messageError.textContent = "";

      let isValid = true;

      if (nama === "") {
        nameError.textContent = "Nama wajib diisi.";
        isValid = false;
      }

      if (email === "") {
        emailError.textContent = "Email wajib diisi.";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = "Format email tidak valid.";
        isValid = false;
      }

      if (pesan === "") {
        messageError.textContent = "Pesan wajib diisi.";
        isValid = false;
      }

      if (isValid) {
        alert("Form berhasil dikirim!");

        contactForm.reset();
      }
    });
  }

  document.getElementById("navToggle").addEventListener("click", function () {
    const menu = document.getElementById("myNavMenu");
    menu.classList.toggle("show");
  });
});
