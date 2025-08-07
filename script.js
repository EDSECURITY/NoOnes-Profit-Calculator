function calculate() {
  const offer = parseFloat(document.getElementById('offer').value);
  const noones = parseFloat(document.getElementById('noones').value);
  const momo = parseFloat(document.getElementById('momo').value);

  if (isNaN(offer) || isNaN(noones) || isNaN(momo)) {
    document.getElementById('result').innerHTML = "<span style='color:red;'>Please fill in all fields correctly.</span>";
    return;
  }

  const adjustedOffer = 100 + offer - 1; // 1% fee
  const multiplier = adjustedOffer / 100;

  const finalTotal = (noones * multiplier) + momo;

  document.getElementById('result').innerHTML = `
    💰 <strong>Total Value:</strong> GHS ${finalTotal.toFixed(4)}
  `;
}
function clearFields() {
  document.getElementById('offer').value = '';
  document.getElementById('noones').value = '';
  document.getElementById('momo').value = '';
  document.getElementById('result').innerHTML = '';
}
