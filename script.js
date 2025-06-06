document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const number = document.getElementById('number').value.trim();
  if (!number) {
    alert('Please enter a phone number.');
    return;
  }

  const resultDiv = document.getElementById('result');
  resultDiv.textContent = 'Loading...';

  fetch(`/api/simdata?num=${encodeURIComponent(number)}`)
    .then(res => {
      if (!res.ok) throw new Error('API request failed');
      return res.text();
    })
    .then(data => {
      resultDiv.textContent = data;
    })
    .catch(err => {
      resultDiv.textContent = 'Error fetching data: ' + err.message;
    });
});
