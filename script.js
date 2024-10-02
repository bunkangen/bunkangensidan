document.addEventListener('DOMContentLoaded', function () {
  // The file path could be relative (if hosted together with the webpage) or an absolute URL.
  fetch('flow.json')
    .then(response => response.json()) // Parse the response as JSON
    .then(labels1 => {
      // Select the output div and display the content of the JSON file
      const outputDiv = document.getElementById('labels1-output');
      outputDiv.innerHTML = `
        <p>labels1: ${labels1.label1}</p>
        <p>labels2: ${labels2.label2}</p>
      `;
    })
    .catch(error => {
      console.error('Error fetching the file:', error);
    });
});
