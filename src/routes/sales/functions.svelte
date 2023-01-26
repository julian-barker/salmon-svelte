<script>

  export const ShopLocations = (location, minHrCust, maxHrCust, averageCookiesPerCust) => {
    location = location;
    minHrCust = minHrCust;
    maxHrCust = maxHrCust;
    averageCookiesPerCust = averageCookiesPerCust;
    hrlyTotal = [];
    dailyTotal = 0;
    customersPerHr = [];
    allCookieCafes.push(this);
  }
  
  new ShopLocations("Seattle", 23, 65, 6.3, 0);
  new ShopLocations("Tokyo", 3, 24, 1.2, 0);
  new ShopLocations("Dubai", 11, 38, 3.7);
  new ShopLocations("Paris", 20, 38, 2.3);
  new ShopLocations("Lima", 2, 16, 4.6);
  
  export const custPerHour = () => {
    for (let i = 0; i < hours.length; i++) {
      customersPerHr.push(
        Math.floor(
          Math.random() * (maxHrCust - minHrCust + 1) + minHrCust
        )
      );
    }
  };
      
  export const totalPerHr = () => {
    for (let i = 0; i < customersPerHr.length; i++) {
      hrlyTotal[i] = Math.round(
        customersPerHr[i] * averageCookiesPerCust
      );
      dailyTotal += hrlyTotal[i];
    }
  };
</script>
