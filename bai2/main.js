function numberOneTriangle(n) {
    let triangleHTML = '';
    if (n >= 1 && n <= 10) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= i; j++) {
                triangleHTML += '* ';
            }
            triangleHTML += '<br>';
        }
    } else {
        triangleHTML = 'Số không hợp lệ. Hãy nhập số từ 1 đến 10.';
    }
    return triangleHTML;
}

function generateTriangle() {
    const numberInput = document.getElementById('numberInput').value;
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = numberOneTriangle(parseInt(numberInput));
}
