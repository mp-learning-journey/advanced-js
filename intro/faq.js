const faqItem = document.querySelectorAll(".faq-item");
const faqItems = document.getElementById('faq-items');
const faqEditButton = document.querySelectorAll(".edit");
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

faqItem.forEach(function (item){
    item.addEventListener('click', toggleFaq)
})

document.body.addEventListener('click', function (e) {
    e.preventDefault();

    if(e.target.className === 'edit'){
        const button = e.target;
        const heading = button.previousElementSibling.firstElementChild;
        const inputFiled =  document.getElementById('editQuestion');
        inputFiled.value = heading.innerText;

        document.getElementById("edit-faq-form").addEventListener('submit', function (e){
            // e.preventDefault();
            console.log("updated");
            heading.innerText = this.editQuestion.value;
            this.reset();
        })
    }
})

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
    const newFaqItem = document.createElement('div');
    const editButton = document.createElement('button');
    editButton.classList.add("edit");
    editButton.innerText = 'Edit';
    heading.append(newFaqItem);
    heading.append(editButton);
    newFaqItem.classList.add('faq-item');
    newFaqItem.innerHTML = `<h3 class="faq-heading">${question}</h3><p>${answer}</p>`;
    newFaqItem.addEventListener('click', toggleFaq);
    faqItems.append(heading);
    // editButton.addEventListener('click', function (e){
    //     e.preventDefault();
    //     clickEditButton(question);
    // });
}

function faqHtml(question, answer) {
    return `
        <div class="heading">
            <div class="faq-item">
                <h3 class="faq-heading">${question}</h3>
                <p>You can include JavaScript in your web page by using the tag. </p>
            </div>
            <button class="edit">Edit</button>
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

function clickEditButton(index) {
    const inputFiled =  document.getElementById('editQuestion');
    inputFiled.value = (typeof(index) == 'number') ? faqHeading[index].innerText : index;

    // add the heading id to the form data-id for easy update
    editForm.setAttribute('data-id', index);
}

// Event bubbling
