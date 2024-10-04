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
      const dataList1 = document.getElementById('data1');

      const lastEntry1 = jsonData.data1[jsonData.data1.length - 1];



      //jsonData.data1.forEach(entry => {
      if (lastEntry1) { // Ensure that the data is not empty
        const listItem = document.createElement('li');
        //const date = new Date(entry.x).toLocaleString(); // Convert timestamp to readable date
        const date = new Date(lastEntry1.x).toLocaleString(); // Convert timestamp to readable date
        //listItem.textContent = `Date: ${date}, ${entry.y}°C`;
        listItem.textContent = `Date: ${date}, ${lastEntry1.y}°C`;
        dataList1.appendChild(listItem);
      }
      //});

      const dataList2 = document.getElementById('data2');
      jsonData.data2.forEach(entry => {
        const listItem = document.createElement('li');
        const date = new Date(entry.x).toLocaleString(); // Convert timestamp to readable date
        listItem.textContent = `Date: ${date}, ${entry.y}°C`;
        dataList2.appendChild(listItem);
      });

      const dataList3 = document.getElementById('data3');
      jsonData.data3.forEach(entry => {
        const listItem = document.createElement('li');
        const date = new Date(entry.x).toLocaleString(); // Convert timestamp to readable date
        listItem.textContent = `Date: ${date}, ${entry.y}°C`;
        dataList3.appendChild(listItem);
      });

      const dataList4 = document.getElementById('data4');
      jsonData.data4.forEach(entry => {
        const listItem = document.createElement('li');
        const date = new Date(entry.x).toLocaleString(); // Convert timestamp to readable date
        listItem.textContent = `Date: ${date}, ${entry.y}°C`;
        dataList4.appendChild(listItem);
      });

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
                      unit: 'minute'
                  },
                  title: {
                      display: true,
                      text: 'Time'
                  }
              },
              y: {
                  title: {
                      display: true,
                      text: 'Temperature (°C)'
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
