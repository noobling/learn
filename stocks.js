window.onload = function() {
  async function searchStock(elem) {
    elem.preventDefault();
    const stockSymbol = document.getElementById("stock-search").value;
    const searchString = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&apikey=ZT74NC1PP39HLQRD`;
    const priceElem = document.getElementById("stock-price");
    try {
      const response = await fetch(searchString);
      if (response.status !== 200) {
        console.log(`error occurred ${response.status}`);
      } else {
        // This getting the date solution won't work well for all browsers
        const data = await response.json();
        const date = new Date().toLocaleDateString();
        const [day, month, year] = date.split("/");
        const newDay = day - 1;
        const currentDate = [year, month, newDay].join("-");
        const price = data["Time Series (Daily)"][currentDate]["4. close"];

        priceElem.innerHTML = `$${price}`;
      }
    } catch (_) {
      priceElem.innerHTML = "Invalid Symbol";
    }
  }

  document
    .getElementById("stock-search-btn")
    .addEventListener("click", searchStock);
};
