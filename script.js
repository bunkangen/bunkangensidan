document.addEventListener('DOMContentLoaded', function () {
  // Fetch the flow.json file
  fetch('flow.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load flow.json');
      }
      return response.json(); // Parse JSON response
    })
    .then(jsonData => {
      // Display Labels
      //document.getElementById('labels').textContent = jsonData.labels3.join(", ");
      
      // Display Series
      //document.getElementById('series').textContent = jsonData.series3.join(", ");
      
      // Display Data (timestamps and temperatures)
      const dataList1 = document.getElementById('loading1');
      const infoheader1 = document.getElementById('info1');

      const lastEntry1 = jsonData.data1[jsonData.data1.length - 1];
      
      if (lastEntry1) { // Ensure that the data is not empty
        // Create a <span> element to style the added text separately
        const span = document.createElement('span');
        const spanefter = document.createElement('spanefter');

        //const date = new Date(entry.x).toLocaleString(); // Convert timestamp to readable date
        const date = new Date(lastEntry1.x).toLocaleString(); // Convert timestamp to readable date
        
        dataList1.remove();
        
        // Set the text content with different styling for the new content
        span.textContent = `: ${lastEntry1.y}°C`;
        spanefter.textContent = `\r\n(Uppdaterat senast: ${date})`;

        // Apply CSS styles to the span (for example, change font size and style)
        span.style.fontFamily = 'Arial, sans-serif'; // Change the font family
        span.style.fontWeight = 'bold';              // Make it bold

        spanefter.style.fontFamily = 'Arial, sans-serif'; // Change the font family
        spanefter.style.fontWeight = 'normal';              // Make it bold
        
        infoheader1.appendChild(span);
        infoheader1.appendChild(spanefter);
      }
      

      const dataList2 = document.getElementById('loading2');
      const infoheader2 = document.getElementById('info2');

      const lastEntry2 = jsonData.data2[jsonData.data2.length - 1];
      
      if (lastEntry2) { // Ensure that the data is not empty
        // Create a <span> element to style the added text separately
        const span = document.createElement('span');
        const spanefter = document.createElement('spanefter');

        //const date = new Date(entry.x).toLocaleString(); // Convert timestamp to readable date
        const date = new Date(lastEntry2.x).toLocaleString(); // Convert timestamp to readable date
        
        dataList2.remove();
        
        // Set the text content with different styling for the new content
        span.textContent = `: ${lastEntry2.y}°C`;
        spanefter.textContent = `\r\n(Uppdaterat senast: ${date})`;

        // Apply CSS styles to the span (for example, change font size and style)
        span.style.fontFamily = 'Arial, sans-serif'; // Change the font family
        span.style.fontWeight = 'bold';              // Make it bold

        spanefter.style.fontFamily = 'Arial, sans-serif'; // Change the font family
        spanefter.style.fontWeight = 'normal';              // Make it bold
        
        infoheader2.appendChild(span);
        infoheader2.appendChild(spanefter);
      }

      const dataList3 = document.getElementById('loading3');
      const infoheader3 = document.getElementById('info3');

      const lastEntry3 = jsonData.data3[jsonData.data3.length - 1];
      
      if (lastEntry3) { // Ensure that the data is not empty
        // Create a <span> element to style the added text separately
        const span = document.createElement('span');
        const spanefter = document.createElement('spanefter');

        //const date = new Date(entry.x).toLocaleString(); // Convert timestamp to readable date
        const date = new Date(lastEntry3.x).toLocaleString(); // Convert timestamp to readable date
        
        dataList3.remove();
        
        // Set the text content with different styling for the new content
        span.textContent = `: ${lastEntry3.y}°C`;
        spanefter.textContent = `\r\n(Uppdaterat senast: ${date})`;

        // Apply CSS styles to the span (for example, change font size and style)
        span.style.fontFamily = 'Arial, sans-serif'; // Change the font family
        span.style.fontWeight = 'bold';              // Make it bold

        spanefter.style.fontFamily = 'Arial, sans-serif'; // Change the font family
        spanefter.style.fontWeight = 'normal';              // Make it bold
        
        infoheader3.appendChild(span);
        infoheader3.appendChild(spanefter);
      }

      const dataList4 = document.getElementById('loading4');
      const infoheader4 = document.getElementById('info4');

      const lastEntry4 = jsonData.data4[jsonData.data4.length - 1];
      
      if (lastEntry4) { // Ensure that the data is not empty
        // Create a <span> element to style the added text separately
        const span = document.createElement('span');
        const spanefter = document.createElement('spanefter');

        //const date = new Date(entry.x).toLocaleString(); // Convert timestamp to readable date
        const date = new Date(lastEntry4.x).toLocaleString(); // Convert timestamp to readable date
        
        dataList4.remove();
        
        // Set the text content with different styling for the new content
        span.textContent = `: ${lastEntry4.y}°C`;
        spanefter.textContent = `\r\n(Uppdaterat senast: ${date})`;

        // Apply CSS styles to the span (for example, change font size and style)
        span.style.fontFamily = 'Arial, sans-serif'; // Change the font family
        span.style.fontWeight = 'bold';              // Make it bold

        spanefter.style.fontFamily = 'Arial, sans-serif'; // Change the font family
        spanefter.style.fontWeight = 'normal';              // Make it bold
        
        infoheader4.appendChild(span);
        infoheader4.appendChild(spanefter);
      }

      const chartData = {
        datasets: [
            {
                label: 'Master Badrum 1.',
                data: jsonData.data1.map(d => ({ x: new Date(d.x), y: d.y })),
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: false
            },
            {
                label: 'Gästbadrum 2.',
                data: jsonData.data2.map(d => ({ x: new Date(d.x), y: d.y })),
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: false
            },
            {
                label: 'Köket 3.',
                data: jsonData.data3.map(d => ({ x: new Date(d.x), y: d.y })),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false
            },
            {
                label: 'Teknikrum 4.',
                data: jsonData.data4.map(d => ({ x: new Date(d.x), y: d.y })),
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: false
            }
        ]
    };
    /* const chartData = {
      datasets: [{
          label: 'Example Data',
          data: [
              { x: new Date('2023-01-01T00:00:00'), y: 21.34 },
              { x: new Date('2023-01-01T01:00:00'), y: 21.23 }
          ],
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: false
      }]
  }; */
  

    const config = {
      type: 'line',
      data: chartData,
      options: {
          responsive: true,
          scales: {
              x: {
                  type: 'time',
                  time: {
                      unit: 'day'
                  },
                  title: {
                      display: true,
                      text: 'Datum'
                  }
              },
              y: {
                  title: {
                      display: true,
                      text: 'Temperatur (°C)'
                  }
              }
          }
      }
  };

  try {
    const ctx = document.getElementById('temperatureChart').getContext('2d');
    new Chart(ctx, config);
} catch (error) {
    console.error('Error rendering the chart:', error);
}

    })
    .catch(error => {
      console.error('Error fetching the file:', error);
      document.getElementById('output').innerHTML = '<p>Failed to load data.</p>';
    });
});
