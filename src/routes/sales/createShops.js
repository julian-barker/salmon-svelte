const opening = 6;
const closing = 20;
const traffic = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];

function createHours(open, close) {
  let i;
  const temp = [];
  for (i = open; i < close; i++) {
    const t = (i + 11) % 12 + 1;
    const m = Math.floor(i/12) ? 'pm' : 'am';
    temp.push(`${t}${m}`);
  }
  return temp;
}

const hours = createHours(opening, closing);

class Shop {
  constructor(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.project();
  }

  project() {
    let i;
    let total = 0;
    const workers = [];
    const temp = [];
    for (i = 0; i < hours.length; i++) {
      const sales = Math.floor((Math.random() * (this.max - this.min + 1) + this.min) * this.avg * traffic[i]);
      const worker = Math.ceil(sales / 20);
      workers.push(worker > 1 ? worker : 2); //min of 2 workers per shift
      temp.push(sales);
      total += sales;
    }

    temp.push(total);
    this.workers = workers;
    this.dailyTotal = total;
    this.projection = temp;
  }
}

export const createShops = () => {
  const shops = [
    new Shop('Seattle', 23, 65, 6.3),
    new Shop('Tokyo', 3, 24, 1.2),
    new Shop('Dubai', 11, 38, 3.7),
    new Shop('Paris', 20, 38, 2.3),
    new Shop('Lima', 2, 16, 4.6),
  ];

  const totalHourlySales = shops[0].projection.map((_, i) => shops.reduce((acc, shop) => acc + shop.projection[i], 0));
  const totalHourlyStaff = shops[0].workers.map((_, i) => shops.reduce((acc, shop) => acc + shop.workers[i], 0));
  const dailyTotal = shops.reduce((acc, shop) => acc + shop.dailyTotal, 0);

  return {
    shops,
    hours,
    totalHourlySales,
    totalHourlyStaff,
    dailyTotal,
  };
};