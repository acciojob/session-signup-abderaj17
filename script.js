//your JS code here. If required.
  document.getElementById('signup-form').addEventListener('submit', function (e) {
      e.preventDefault(); // prevent page reload

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;

      if (password === confirmPassword) {
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);

        alert('Sign up successful!');
        this.reset(); // optional: clear the form
      } else {
        alert('Passwords do not match');
      }
    });