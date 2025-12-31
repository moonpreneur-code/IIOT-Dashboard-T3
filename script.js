const PICO_IP = "https://interdependently-indecomposable-isaiah.ngrok-free.dev"; // CHANGE THIS

function sendCmd(cmd) {
  fetch(`${PICO_IP}/${cmd}`)
    .catch(err => console.error(err));
}

function getADC() {
  fetch(`${PICO_IP}/adc`)
    .then(res => res.text())
    .then(data => {
      document.getElementById("adc").innerText = data;
    })
    .catch(err => console.error(err));
}

// Fetch ADC value every 300ms
setInterval(getADC, 300);



