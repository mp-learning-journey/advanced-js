const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    item.addEventListener('click', function () {
        this.classList.toggle('active');
    })
})