function calculateMaxProfit() {
    const timeUnits = parseInt(document.getElementById("timeUnits").value);
    const resultsElement = document.getElementById("results");
    resultsElement.innerHTML = ""; // Clear previous results

    let maxEarnings = 0;
    let bestSolutions = [];

    for (let theaters = 0; theaters <= timeUnits / 5; theaters++) {
      for (let pubs = 0; pubs <= timeUnits / 4; pubs++) {
        for (let commercialParks = 0; commercialParks <= timeUnits / 10; commercialParks++) {
          const totalUnits = theaters * 5 + pubs * 4 + commercialParks * 10;
          if (totalUnits <= timeUnits) {
            const earnings = theaters * 1500 + pubs * 1000 + commercialParks * 3000;
            if (earnings > maxEarnings) {
              maxEarnings = earnings;
              bestSolutions = [`T: ${theaters} P: ${pubs} C: ${commercialParks}`];
            } else if (earnings === maxEarnings) {
              bestSolutions.push(`T: ${theaters} P: ${pubs} C: ${commercialParks}`);
            }
          }
        }
      }
    }

    resultsElement.innerHTML = `<p>Max Earnings: $${maxEarnings}</p>`;
    bestSolutions.forEach((solution, index) => {
      resultsElement.innerHTML += `<p>${index + 1}. ${solution}</p>`;
    });
  }