const faqItem = document.querySelectorAll(".faq-item");
const faqItems = document.getElementById('faq-items');
const faqEditButton = document.getElementsByClassName('edit');
const faqHeading = document.getElementsByClassName('faq-heading');
const form = document.getElementById("faq-form");
const editForm = document.getElementById("edit-faq-form");

let faqs = [];

const persistedFaq = JSON.parse(localStorage.getItem("faqs"));
if(persistedFaq) {
    faqs = persistedFaq;
    faqs.forEach(faq => {
        appendFaq(faq.question, faq.answer)
    })
}

for(let x = 0; x < faqEditButton.length; x++) {
    // Toggle click
    faqItem[x].addEventListener('click', toggleFaq);

    // Edit click
    faqEditButton[x].addEventListener('click', function (e) {
        e.preventDefault()
        document.getElementById('editQuestion').value = faqHeading[x].innerText

        // add the heading id to the form data-id for easy update
        editForm.setAttribute('data-id', x);
    })
}

// update faq form
editForm.addEventListener('submit', function (e){
    e.preventDefault();
    const question = this.editQuestion.value;

    const index = this.getAttribute('data-id');
    faqHeading[index].innerText = question;

    // clear input and form
    editForm.reset();
    this.removeAttribute('data-id');
})

// Add Faq
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

const var1 = "dddd";
const var2 = "jgmg";

const string = `hhghghghghgh ${var1} ngnnvhffb ${var2}`

// Event bubbling
