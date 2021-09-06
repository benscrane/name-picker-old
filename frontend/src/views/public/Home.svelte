<script>
  import { Navigate } from 'svelte-router-spa';

  let emailAddress;
  let schoolName;

  const register = () => {
    alert(`Email address is ${emailAddress} and school name is ${schoolName}`);
  };
</script>

<div class="notification">
  <div class="columns">
    <div class="column">
      <div class="content">
        <h1>Easily Publish Your School Lunch Menus</h1>
        <p>
          We make it easy to publish weekly school lunch menus on the web and
          provide them to students and parents in a mobile friendly format.
        </p>
        <p>
          Just set the details and hit publish! Register and get started today.
        </p>
      </div>
    </div>
    <div class="columb">
      <div class="content">
        <h3>Register Now</h3>
        <div class="field">
          <label class="label" for="emailInput">Email Address</label>
          <div class="control">
            <input
              bind:value={emailAddress}
              id="emailInput"
              type="text"
              placeholder="Enter your email address"
              class="input"
            />
          </div>
        </div>
        <div class="field">
          <label class="label" for="schoolInput">School Name</label>
          <div class="control">
            <input
              bind:value={schoolName}
              id="schoolInput"
              type="text"
              placeholder="Enter your school's name"
              class="input"
            />
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button on:click={register} class="button is-link is-outlined">
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="container">
  <div class="content" style="line-height: 30px;">
    <center>
      <span>Already registered?</span>
      <Navigate to="/admin/manage-menus">
        <button class="button is-small is-text">Log in</button>
      </Navigate>
    </center>
  </div>
</div>
