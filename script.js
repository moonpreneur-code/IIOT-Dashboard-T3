const PICO_IP = "https://interdependently-indecomposable-isaiah.ngrok-free.dev";

function sendCmd(cmd) {
  fetch(`${PICO_IP}/${cmd}?ngrok-skip-browser-warning=true`)
    .catch(err => console.error(err));
}

function getADC() {
  fetch(`${PICO_IP}/adc?ngrok-skip-browser-warning=true`)
    .then(res => res.text())
    .then(value => {
      console.log("ADC:", value);
      document.getElementById("adc").innerText = value;
    })
    .catch(err => console.error("ADC error:", err));
}

setInterval(getADC, 400);
