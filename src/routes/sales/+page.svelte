<script>
  // import ShopLocations from './functions.svelte'
  // import Data from "./data.svelte";
  import { createShops } from './createShops.js';
  let { shops, totalHourlySales, totalHourlyStaff, hours } = createShops();
</script>

<section>
  <h1>SSC Sales Data</h1>
  <div class="container">
    <div class="table-container" id="sales-container">
      <h3>Sales Table</h3>
      <table id="sales-table">
        <thead>
          <th>Store</th>
          {#each hours as hour}
            <th>{hour}</th>
          {/each}
          <th>
            Total
          </th> 
        </thead>
        {#each shops as shop}
          <tr>
            <th>{shop.name}</th>
            {#each shop.projection as sale}
              <td>{sale}</td>
            {/each}
          </tr>
        {/each}
        <tr>
          <th>Total</th>
          {#each totalHourlySales as total}
            <td>{total}</td>
          {/each}
        </tr>
      </table>
    </div>
    <div class="table-container" id="staff-container">
      <h3>Staffing Table</h3>
      <table id="staff-table">
        <thead>
          <tr>
            <th>Store</th>
            {#each hours as hour}
              <th>{hour}</th>
            {/each}
          </tr>
        </thead>
        {#each shops as shop}
          <tr>
            <th>{shop.name}</th>
            {#each shop.workers as workers}
              <td>{workers}</td>
            {/each}
          </tr>
        {/each}
        <tr>
          <th>Total</th>
          {#each totalHourlyStaff as total}
            <td>{total}</td>
          {/each}
        </tr>
      </table>
    </div>
    <div class="table-container" id="params-container">
      <h3>Store Parameters</h3>
      <div id="stats-body"></div>
      <button id="choose-store">Update Store Parameters</button>
      <button id="add-store">New Store Location</button>
    </div>
  </div>
</section>

<style>
  table {
  width: 100%;
  padding: 16px;
  background-color: var(--main-font-col);
  color: var(--table-font-col) !important;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-align: center;
}

th, td {
  width: 80px;
  border: 1px solid hsl(0 0% 15%);;
  border-collapse: collapse;
  background-color: var(--main-bg-col);
}

th {
  margin-bottom: 20px;
  padding-top: 4px;
  padding-bottom: 4px;
}

td {
  padding-top: 2px;
  padding-bottom: 2px;
}
</style>