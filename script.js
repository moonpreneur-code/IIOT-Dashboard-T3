const PICO_IP = "https://interdependently-indecomposable-isaiah.ngrok-free.dev";

function sendCmd(cmd) {
  fetch(`${PICO_IP}/${cmd}`, {
    headers: {
      "ngrok-skip-browser-warning": "true"
    }
  }).catch(err => console.error(err));
}

function getADC() {
  fetch(`${PICO_IP}/adc`, {
    headers: {
      "ngrok-skip-browser-warning": "true"
    }
  })
  .then(res => res.text())
  .then(data => {
    document.getElementById("adc").innerText = data;
  })
  .catch(err => console.error(err));
}

// Update ADC every 500 ms
setInterval(getADC, 500);
