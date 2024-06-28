const faqItem = document.querySelectorAll(".faq-item");
const faqItems = document.getElementById('faq-items');
let faqs = [];

const persistedFaq = JSON.parse(localStorage.getItem("faqs"));
if(persistedFaq) {
    faqs = persistedFaq;
    faqs.forEach(faq => {
        appendFaq(faq.question, faq.answer)
    })
}

faqItem.forEach(function(item) {
    item.addEventListener('click', toggleFaq)
})

const form = document.getElementById("faq-form");
form.addEventListener('submit', function (e){
    e.preventDefault()
    const question = this.question.value;
    const answer = this.answer.value;

    // faqItems.insertAdjacentHTML("beforeend", faqHtml(question, answer))

    appendFaq(question, answer)

    // persist new faq
     faqs.push({
        question: question,
        answer: answer
     })

    localStorage.setItem("faqs", JSON.stringify(faqs))
})

function appendFaq(question, answer) {
    const newFaqItem = document.createElement('div');
    newFaqItem.classList.add('faq-item');
    newFaqItem.innerHTML = `<h3>${question}</h3><p>${answer}</p>`;
    newFaqItem.addEventListener('click', toggleFaq);

    faqItems.appendChild(newFaqItem);
}

function faqHtml(question, answer) {
    return `
    <div class="faq-item">
        <h3>${question}</h3>
        <p>${answer}</p>
    </div>`
}

function toggleFaq(element) {
    document.querySelectorAll(".faq-item").forEach(function(item) {
        if(item !== element.currentTarget) {
            item.classList.remove('active')
        }
    })
    element.currentTarget.classList.toggle('active');
}
