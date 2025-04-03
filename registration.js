document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value.trim();
    const aadhar = document.getElementById('aadhar').value.trim();
    const pan = document.getElementById('pan').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const marksInput = document.getElementById('marks').value.trim();

    let errorMessage = '';
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    const nameParts = fullName.split(' ');
    if (nameParts.length < 2 || nameParts.length > 3) {
        errorMessage += 'Enter a valid full name with First, Middle, and Last names.<br>';
    }

  
    if (!/^\d{12}$/.test(aadhar)) {
        errorMessage += 'Aadhar number must be a 12-digit number.<br>';
    }

   
    if (!/^[A-Z]{5}\d{4}[A-Z]{1}$/.test(pan)) {
        errorMessage += 'PAN card number must follow the format ABCDE1234F.<br>';
    }

 
    if (!/^\d{10}$/.test(mobile)) {
        errorMessage += 'Mobile number must be a 10-digit number.<br>';
    }


    if (!dob) {
        errorMessage += 'Date of birth is required.<br>';
    }

    const marks = marksInput.split(',').map(Number);
    if (marks.length !== 6 || marks.some(isNaN)) {
        errorMessage += 'Enter valid marks for 6 subjects, separated by commas.<br>';
    } else {
        marks.sort((a, b) => b - a);
        const bestFiveTotal = marks.slice(0, 5).reduce((sum, mark) => sum + mark, 0);
        const percentage = (bestFiveTotal / 500) * 100;
        resultDiv.innerHTML = `Percentage (Best of Five): ${percentage.toFixed(2)}%`;
    }

    if (errorMessage) {
        resultDiv.style.color = 'red';
        resultDiv.innerHTML = errorMessage;
    } else {
        resultDiv.style.color = 'green';
    }
});