document.addEventListener('DOMContentLoaded', function() {
    function sendMoney() {
        var budget1 = 500;
        var budget2 = 0;

        if (budget1 >= 135) {
            budget1 -= 135;
            budget2 += 135;
        } else {
            alert("Insufficient budget on First Website.");
        }

        document.querySelector('#budget1').textContent = budget1;
        document.querySelector('#budget2').textContent = budget2;
    }
});