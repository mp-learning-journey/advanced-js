window.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registerForm');

    form.addEventListener('submit', function (e){
        e.preventDefault();

        const username = this.username;
        const email = this.email;
        const password = this.password;

        if(!isValidated([username, email, password])){
            alert(username.value + " your Registration is Successful");
            form.reset();
        }

    })

    function isValidated(arr){
        let error = false;

        arr.forEach((element) => {
            if(element.value === ''){
                element.classList.add('error');
                error = true
            }else{
                element.classList.remove('error')
                error = false
            }
        })

        return error;
    }

})