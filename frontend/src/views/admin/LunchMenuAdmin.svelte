<script>
  import { onMount } from 'svelte';
  import axios from 'axios';
  import { user } from '../../stores';
  import { navigateTo } from 'svelte-router-spa';

  let lunchWeekList = [];

  onMount(async () => {
    try {
      const response = await axios.get(
        'https://3000-olive-yak-8ifswvvp.ws-us15.gitpod.io/api/lunch-week'
      );
      lunchWeekList = response.data;
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
</div>
