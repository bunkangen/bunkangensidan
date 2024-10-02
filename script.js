document.addEventListener('DOMContentLoaded', function () {
  // The file path could be relative (if hosted together with the webpage) or an absolute URL.
  fetch('data.json')
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
      // Select the output div and display the content of the JSON file
      const outputDiv = document.getElementById('data-output');
      outputDiv.innerHTML = `
        <p>Name: ${data.name}</p>
        <p>Age: ${data.age}</p>
        <p>Email: ${data.email}</p>
      `;
    })
    .catch(error => {
      console.error('Error fetching the file:', error);
    });
});
