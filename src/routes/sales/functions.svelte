function ShopLocations(location, minHrCust, maxHrCust, averageCookiesPerCust) {
  this.location = location;
  this.minHrCust = minHrCust;
  this.maxHrCust = maxHrCust;
  this.averageCookiesPerCust = averageCookiesPerCust;
  this.hrlyTotal = [];
  this.dailyTotal = 0;
  this.customersPerHr = [];
  allCookieCafes.push(this);
}

new ShopLocations("Seattle", 23, 65, 6.3, 0);
new ShopLocations("Tokyo", 3, 24, 1.2, 0);
new ShopLocations("Dubai", 11, 38, 3.7);
new ShopLocations("Paris", 20, 38, 2.3);
new ShopLocations("Lima", 2, 16, 4.6);

ShopLocations.prototype.custPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customersPerHr.push(
      Math.floor(
        Math.random() * (this.maxHrCust - this.minHrCust + 1) + this.minHrCust
      )
    );
  }
};

ShopLocations.prototype.totalPerHr = function () {
  for (let i = 0; i < this.customersPerHr.length; i++) {
    this.hrlyTotal[i] = Math.round(
      this.customersPerHr[i] * this.averageCookiesPerCust
    );
    this.dailyTotal += this.hrlyTotal[i];

  }
};
