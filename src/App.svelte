<script>
  import School from "./components/school.svelte";
  import Modal from "svelte-simple-modal";

  export let allSchools;

  const sortNumeric = (column, isInt) => {
    allSchools.sort((a, b) => {
      let val1;
      let val2;
      if (isInt) {
        val1 = parseInt(a[column]);
        val2 = parseInt(b[column]);
      } else {
        val1 = parseFloat(a[column]);
        val2 = parseFloat(b[column]);
      }

      if (isNaN(val1)) {
        val1 = -1;
      }
      if (isNaN(val2)) {
        val2 = -1
      }

      if (val1 < val2) {
        return 1;
      } else if (val1 > val2) {
        return -1;
      } else {
        return 0;
      }
    });
    allSchools = allSchools;
  }

  const sort = (column) => {
    allSchools.sort((a, b) => {
      let val1 = a[column];
      let val2 = b[column];

      if (val1 < val2) {
        return -1;
      } else if (val1 > val2) {
        return 1;
      } else {
        return 0;
      }
    });
    allSchools = allSchools;
  };
</script>

<style>
</style>

<Modal>
  <table>
    <tr>
      <th><button on:click={() => sort('INSTNM')}>Institution</button></th>
      <th>City, State</th>
      <th>
        <button on:click={() => sortNumeric('ADM_RATE')}>Admission Rate</button></th>
      <th>
        <button on:click={() => sortNumeric('SAT_AVG')}>Average SAT Equivalent Score</button>
      </th>
      <th>Highest Degree Offered</th>
      <th>Carnegie Classification</th>
      <th>Website</th>
      <th>Additional Info</th>
    </tr>
    {#each allSchools as school}
      <School {school} />
    {/each}
  </table>
</Modal>
