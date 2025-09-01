// Contact Form
document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    const response = document.querySelector('.form-response');
    response.textContent = "Thank you! Your message has been sent.";
    this.reset();
});
