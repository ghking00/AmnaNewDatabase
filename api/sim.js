document.getElementById('simForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const number = document.getElementById("number").value.trim();
  if (!number) {
    alert("Please enter a phone number.");
    return;
  }

  try {
    const response = await fetch(`https://famofc.kesug.com/apis/simdataapi.php?num=${encodeURIComponent(number)}`);
    const data = await response.text();

    // Show result in a new tab instead of redirecting
    const resultWindow = window.open();
    resultWindow.document.write(data);
  } catch (error) {
    alert("Error fetching data: API request failed");
    console.error(error);
  }
});
