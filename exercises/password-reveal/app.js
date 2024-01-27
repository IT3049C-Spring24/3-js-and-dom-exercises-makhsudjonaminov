// 🤖: create 2 constants with references to the password input and the reveal button from the DOM
document.addEventListener('DOMContentLoaded', function () {

	const passwordInput = document.getElementById('password');
	const togglePasswordIcon = document.getElementById('toggle-password');

	// 🤖: Create an Event Listener on the password reveal button
	togglePasswordIcon.addEventListener('click', togglePasswordVisibility);


	// Event handler to toggle the password field visibility
	function togglePasswordVisibility() {

		// 🤖: The event listener should toggle the password field attribute between `password` and `text` to change the visibility of the password field content.
		const currentType = passwordInput.type;
		passwordInput.type = (currentType === 'password') ? 'text' : 'password';

		togglePasswordIcon.classList.toggle('bi-eye');
		togglePasswordIcon.classList.toggle('bi-eye-slash');

	}
});

