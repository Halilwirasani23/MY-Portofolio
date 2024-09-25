// script.js
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const SERVICE_ID = 'service_4anjp49'; // Ganti dengan ID layanan kamu
const TEMPLATE_ID = 'template_fdi1fuq'; // Ganti dengan ID template kamu
const USER_ID = 'x8P7cTONX5bKytx_j'; // Ganti dengan Public Key (User ID) kamu

// Inisialisasi EmailJS
emailjs.init('x8P7cTONX5bKytx_j'); // Pastikan user ID berada di dalam tanda kutip

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('contact-form').onsubmit = function(event) {
    event.preventDefault(); // Mencegah pengiriman form default

    const formData = {
      name: this.name.value,      // Variabel "name"
      email: this.email.value,    // Variabel "email"
      message: this.message.value // Variabel "message"
    };

    // Kirim formulir ke EmailJS
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData)
      .then(function(response) {
        const responseMessage = document.getElementById('response-message');
        
        // Tampilkan pesan dengan animasi
        responseMessage.innerText = 'Message sent successfully!';
        responseMessage.classList.add('show');

        // Hilangkan pesan setelah 3 detik dengan animasi keluar
        setTimeout(function() {
          responseMessage.classList.remove('show');
          responseMessage.classList.add('hide');
        }, 3000);

        // Reset form
        document.getElementById('contact-form').reset(); 
      }, function(error) {
        const responseMessage = document.getElementById('response-message');
        responseMessage.innerText = 'Error sending message: ' + JSON.stringify(error);
        responseMessage.classList.add('show');

        // Hilangkan pesan setelah 3 detik dengan animasi keluar
        setTimeout(function() {
          responseMessage.classList.remove('show');
          responseMessage.classList.add('hide');
        }, 3000);
      });
  };
});
