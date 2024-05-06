        function validateForm(event){
            event.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;
            const passwordRegex = /^.{6,}$/;
            const usernameIsValid = usernnameRegex.test(username);
            const emailIsValid = emailRegex.test(email);
            const passwordIsValid = passwordRegex.test(password);
            document.getElementById('usernameError').textContent = usernameIsValid ? '' : 'Invalid username';
            document.getElementById('emailError').textContent = emailIsValid ? '' : 'Invalid email';
            document.getElementById('passwordError').textContent = passwordIsValid ? '' : 'password must br at least 6 character';
            if(usernameIsValid && emailIsValid && passwordIsValid){
                alert('Form Submitted Successfully!');
            }
        }

     