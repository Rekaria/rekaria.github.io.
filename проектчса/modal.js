document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("loginModal");
    const modalBody = document.getElementById("loginModalBody");
    const authBtn = document.querySelector(".header__auth-btn");
    const template = document.getElementById("loginTemplate");

    let isLoaded = false;

    function openModal() {
        if (!isLoaded && template) {
            const clone = template.content.cloneNode(true);
            modalBody.appendChild(clone);
            
            const submitBtn = modalBody.querySelector(".login_btn");
            const loginInput = modalBody.querySelector(".loginField");
            const passwordInput = modalBody.querySelector(".passwordField");

            submitBtn.addEventListener("click", (e) => {
                e.preventDefault();
                
                if (!loginInput.value.trim() || !passwordInput.value.trim()) {
                    alert("Пожалуйста, заполните логин и пароль");
                    return;
                }

                console.log("Успешный вход:", {
                    login: loginInput.value,
                    password: passwordInput.value
                });
                
                closeModal();
            });

            isLoaded = true;
        }
        
        modal.hidden = false;
        document.body.style.overflow = "hidden"; 
    }

    function closeModal() {
        modal.hidden = true;
        document.body.style.overflow = ""; 
    }

    if (authBtn) {
        authBtn.addEventListener("click", openModal);
    }

    modal.addEventListener("click", (e) => {
        if (e.target.hasAttribute("data-close")) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.hidden) {
            closeModal();
        }
    });
});