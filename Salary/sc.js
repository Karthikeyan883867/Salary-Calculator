function calculateSalary() {
    const basicSalary = parseFloat(document.getElementById('basicSalary').value);
    const allowances = parseFloat(document.getElementById('allowances').value);
    const deductions = parseFloat(document.getElementById('deductions').value);

    if (isNaN(basicSalary) || isNaN(allowances) || isNaN(deductions)) {
        alert('Please fill all fields with valid numbers');
        return;
    }

    const grossSalary = basicSalary + allowances;
    const netSalary = grossSalary - deductions;

    document.getElementById('grossSalary').innerText = grossSalary.toFixed(2);
    document.getElementById('netSalary').innerText = netSalary.toFixed(2);
    document.getElementById('result').style.display = 'block';
}