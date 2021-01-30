document.getElementById('generate-btn').addEventListener('click', () => {
    generatePin();
})

function generatePin() {
    const randomPin = (Math.random() * 10000 + '').split('.')[0];
    document.getElementById('generated-pin').value = randomPin;
    if (randomPin.length < 4) {
        generatePin();
    }
}

document.getElementById('digit-container').addEventListener('click', e => {
    const pin = e.target.innerText;
    if (isNaN(pin)) {
        if (pin === 'DEL') { //backspace
            const pinInput = document.getElementById('pin');
            pinInput.value = pinInput.value.substr(0, (pinInput.value.length - 1));
        }
        if (pin === 'C') { // clear
            document.getElementById('pin').value = '';
        }
    } else {
        let pinInput = document.getElementById('pin');
        pinInput.value = pinInput.value + pin;
    }
})

document.getElementById('submit-btn').addEventListener('click', () => {
    const generatedPin = document.getElementById('generated-pin').value;
    const pinInput = document.getElementById('pin').value;

    if (generatedPin == pinInput & generatedPin !== '' & pinInput !== '') {
        getMatchedResult('block', 'none');
    } else if (generatedPin !== pinInput & generatedPin !== '' & pinInput !== '') {
        getMatchedResult('none', 'block');
        showError();
    }
    document.getElementById('generated-pin').value = '';
    document.getElementById('pin').value = '';
})

function getMatchedResult(correct, incorrect) {
    document.getElementById('correct').style.display = correct;
    document.getElementById('incorrect').style.display = incorrect;
}

function showError() {
    let tryLeft = document.getElementById('try').innerText;
    let tryLeftInt = parseInt(tryLeft);
    document.getElementById('try').innerText = tryLeftInt - 1;

    if (parseInt(tryLeft) < 2) {
        document.getElementById('error').innerText = 'Try again later';
        document.getElementById('submit-btn').style.cursor = 'not-allowed';
        document.getElementById('submit-btn').disabled = true;
    }
}