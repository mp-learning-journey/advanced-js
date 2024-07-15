const faqItem = document.querySelectorAll(".faq-item");
const faqItems = document.getElementById('faq-items');
const form = document.getElementById("faq-form");
const editForm = document.getElementById("edit-faq-form");
let currentEditingFaq = null;
let faqs = [];

const persistedFaq = JSON.parse(localStorage.getItem("faqs"));
if(persistedFaq) {
    faqs = persistedFaq;
    faqs.forEach(faq => {
        appendFaq(faq.question, faq.answer)
    })
}

faqItem.forEach(function (item){
    item.addEventListener('click', function (element){
        toggleFaq(item)
    })
})

faqItems.addEventListener('click', function (e) {
    e.preventDefault();

    if(e.target.className === 'edit'){
        const button = e.target;

        const heading = button.previousElementSibling.firstElementChild;
        currentEditingFaq = heading;
        const inputFiled =  document.getElementById('editQuestion');
        inputFiled.value = heading.innerText;
    }else if(e.target.className === 'delete'){
        e.target.parentElement.remove();
    }
})

// update faq form
editForm.addEventListener('submit', function (e){
    e.preventDefault();
    if(currentEditingFaq) {
        currentEditingFaq.innerText = this.editQuestion.value;
        // clear input and form
        editForm.reset();
    }else{
        alert("Please select faq to update");
    }
})

// Add Faq
form.addEventListener('submit', function (e){
    e.preventDefault()
    const question = this.question.value;
    const answer = this.answer.value;

    appendFaq(question, answer)

    // persist new faq
     faqs.push({
        question: question,
        answer: answer
     })

    localStorage.setItem("faqs", JSON.stringify(faqs))
})

function appendFaq(question, answer) {
    const heading = document.createElement('div');
    heading.classList.add("heading");
    heading.innerHTML = faqHtml(question, answer);
    faqItems.append(heading);
    heading.addEventListener('click', function (element){
        toggleFaq(element.target.parentElement)
    });
}

function faqHtml(question, answer) {
    return `
        <div class="faq-item">
            <h3 class="faq-heading">${question}</h3>
            <p>You can include JavaScript in your web page by using the tag. </p>
        </div>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
        `
}

function toggleFaq(element) {
    document.querySelectorAll(".faq-item").forEach(function(item) {
        if(item !== element.currentTarget) {
            item.classList.remove('active')
        }
    })
    element.classList.toggle('active');
}
