<script>
  import { Route } from 'svelte-router-spa';
  import { onMount } from 'svelte';
  import { user } from '../../stores';

  let initialized = false;
  export let currentRoute;

  onMount(() => {
    user.set({
      name: 'Test User',
      schoolName: 'Test School',
    });
    initialized = true;
  });
</script>

<div>
  {#if initialized}
    <Route {currentRoute} />
  {/if}
</div>
