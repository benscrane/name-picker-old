<script>
  import { onMount } from 'svelte';
  import axios from 'axios';
  import Icon from 'svelte-awesome';
  import { refresh } from 'svelte-awesome/icons';
  import { user } from '../../stores';
  import { navigateTo } from 'svelte-router-spa';

  let lunchWeekList = [];
  let loading = true;

  onMount(async () => {
    try {
      const response = await axios.get(
        `${process.env.API_ROOT}/api/lunch-week`
      );
      lunchWeekList = response.data;
      loading = false;
    } catch (error) {
      console.error(error);
    }
  });

  const openLunchWeekDetails = (lunchWeek) => {
    const route = `/admin/manage-menus/week-details/${lunchWeek.lunchWeekId}`;
    navigateTo(route);
  };
</script>

<div>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/admin/manage-menus">Lunch Menu Administration</a>
      </li>
      <li class="is-active">
        <a href="/#">{$user.schoolName}</a>
      </li>
    </ul>
  </nav>
  {#if loading}
    <div class="section">
      <Icon spin data={refresh} scale="3" />
    </div>
  {:else}
    <table class="table">
      <thead>
        <tr>
          <th>Week Of</th>
          <th>Published</th>
        </tr>
      </thead>
      {#each lunchWeekList as lunchWeek}
        <tr
          on:click={openLunchWeekDetails(lunchWeek)}
          class="has-text-link"
          style="cursor: pointer"
        >
          <td>{lunchWeek.weekOf}</td>
          <td>{lunchWeek.isPublished}</td>
        </tr>
      {/each}
    </table>
  {/if}
</div>
