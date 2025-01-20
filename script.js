document.getElementById('calculateBtn').addEventListener('click', function() {
    // Get input values
    const basicPay = parseFloat(document.getElementById('basicPay').value) || 0;
    const fitmentFactor = parseFloat(document.getElementById('fitmentFactor').value) || 0;
    const daPercent = parseFloat(document.getElementById('da').value) || 0;
    const hraPercent = parseFloat(document.getElementById('hra').value) || 0;
    const taPercent = parseFloat(document.getElementById('ta').value) || 0;

    // Calculate components
    const fitmentPay = basicPay * fitmentFactor;
    const da = (basicPay * daPercent) / 100;
    const hra = (basicPay * hraPercent) / 100;
    const ta = (basicPay * taPercent) / 100;

    // Calculate total salary
    const totalSalary = basicPay + fitmentPay + da + hra + ta;

    // Display result
    document.getElementById('totalSalary').textContent = `₹ ${totalSalary.toFixed(2)}`;
});
