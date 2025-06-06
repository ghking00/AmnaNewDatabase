document.getElementById('simForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const number = document.getElementById("number").value.trim();

  if (!number) {
    alert("Please enter a phone number.");
    return;
  }

  const apiUrl = `https://famofc.kesug.com/apis/simdataapi.php?num=${encodeURIComponent(number)}`;

  // Open the API URL directly in new tab to avoid CORS
  window.open(apiUrl, '_blank');
});
