const otpInputs = document.querySelectorAll('.otp-inputs input');
const submitBtn = document.querySelector('.submit-btn');

otpInputs[0].addEventListener('input', (e) => {
    if (e.target.value) {
        otpInputs[1].focus();
    }
});

otpInputs[1].addEventListener('input', (e) => {
    if (e.target.value) {
        otpInputs[2].focus();
    }
});

otpInputs[2].addEventListener('input', (e) => {
    if (e.target.value) {
        otpInputs[3].focus();
    }
});

otpInputs[3].addEventListener('input', (e) => {
    if (e.target.value) {
        submitBtn.disabled = false;
    }
});

submitBtn.addEventListener('click', () => {
    alert('OTP submitted
    ');