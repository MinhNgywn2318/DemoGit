function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function calculatePrimeSum() {
    const numA = parseInt(document.getElementById('numA').value);
    const numB = parseInt(document.getElementById('numB').value);
    let primeSum = 0;

    if (numA >= numB || isNaN(numA) || isNaN(numB)) {
        document.getElementById('result').textContent = 'Vui lòng nhập số a và b hợp lệ!';
        return;
    }

    for (let i = numA; i <= numB; i++) {
        if (isPrime(i)) {
            primeSum += i;
        }
    }

    document.getElementById('result').textContent = `Tổng các số nguyên tố từ ${numA} đến ${numB} là: ${primeSum}`;
}
