<script>
  // import ShopLocations from './functions.svelte'
  // import Data from "./data.svelte";
  import { createShops, addShop } from './createShops.js';
  import Modal from './modal.svelte';

  let showAddModal = false;
  // let showUpdateModal = false;
  $: ({ shops, totalHourlySales, totalHourlyStaff, hours } = createShops());

  // $: shop= {}
  let shop = {
    name: '',
    min: 0,
    max: 0,
    avg: 0
  };

  function handleAddSubmit(e) {
    e.preventDefault();
    console.log(shop);
    console.log('calling handleSubmit');
    shops = addShop(shop.name, parseInt(shop.min), parseInt(shop.max), parseInt(shop.avg), shops);
    showAddModal = false;
  }

</script>

<section>
  <h1>SSC Sales Data</h1>
  <div class="container">
    <div class="table-container" id="sales-container">
      <h3>Sales Table</h3>
      <table id="sales-table">
        <thead>
          <th>Shop</th>
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
            <th>Shop</th>
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
      <!-- <h3>Shop Parameters</h3>
      <div id="stats-body"></div>
      <button id="choose-shop">Update Shop Parameters</button> -->
      <button on:click="{() => showAddModal = true}">
        Add New Shop
      </button>
    </div>
  </div>

  
  
  {#if showAddModal}
    <Modal on:close="{() => showAddModal = false}">
      <form class="content" on:submit={handleAddSubmit}>
        <label for='shop-name'>Name</label>
        <input name="shop-name" type="text" bind:value={shop.name} />
        <label for='shop-min'>Min Sales</label>
        <input name="shop-min" type="text" bind:value={shop.min} />
        <label for='shop-max'>Max Sales</label>
        <input name="shop-max" type="text" bind:value={shop.max} />
        <label for='shop-avg'>Avg Sales</label>
        <input name="shop-avg" type="text" bind:value={shop.avg} />
        <button type="submit">Submit</button>
      </form>
    </Modal>
  {/if}


</section>

<style>
  h1 {
    font-weight: bold;
  }
  
  h1, h3 {
  text-align: center;
  color: coral;
  }

  table {
    width: 100%;
    padding: 16px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-align: center;
  }

  th, td {
    width: 80px;
    border: 1px solid hsl(0 0% 15%);;
    border-collapse: collapse;
  }

  th {
    margin-bottom: 20px;
    padding-top: 4px;
    padding-bottom: 4px;
    background-color: bisque;
  }

  td {
    padding-top: 2px;
    padding-bottom: 2px;
    background-color: cornsilk;
  }

  form {
    display: flex;
    flex-direction: column;
  }
</style>