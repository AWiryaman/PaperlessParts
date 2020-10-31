<script>
  export let school;
  import programs from "../../public/programs.json";

  const getLocale = (locale) => {
    switch (parseInt(locale)) {
      case 11:
        return "City: Large (population of 250,000 or more)";
      case 12:
        return "City: Midsize (population of at least 100,000 but less than 250,000)";
      case 13:
        return "City: Small (population less than 100,000)";
      case 21:
        return "Suburb: Large (outside principal city, in urbanized area with population of 250,000 or more)";
      case 22:
        return "Suburb: Midsize (outside principal city, in urbanized area with population of at least 100,000 but less than 250,000)";
      case 23:
        return "Suburb: Small (outside principal city, in urbanized area with population less than 100,000)";
      case 31:
        return "Town: Fringe (in urban cluster up to 10 miles from an urbanized area)";
      case 32:
        return "Town: Distant (in urban cluster more than 10 miles and up to 35 miles from an urbanized area)";
      case 33:
        return "Town: Remote (in urban cluster more than 35 miles from an urbanized area)";
      case 41:
        return "Rural: Fringe (rural territory up to 5 miles from an urbanized area or up to 2.5 miles from an urban cluster)";
      case 42:
        return "Rural: Distant (rural territory more than 5 miles but up to 25 miles from an urbanized area or more than 2.5 and up to 10 miles from an urban cluster)";
      case 43:
        return "Rural: Remote (rural territory more than 25 miles from an urbanized area and more than 10 miles from an urban cluster)";
      default:
        return "Not Available";
    }
  };
</script>

<style>
  h2 {
    font-size: 2rem;
    text-align: center;
  }

  .programs {
    height: 200px;
    overflow-y: auto;
  }
</style>

<h2>{school['INSTNM']}</h2>
<div><b>Location: </b> {school['CITY']}, {school['STABBR']} {school['ZIP']} </div>
<div><b>Latitude: </b> {school['LATITUDE']}</div>
<div><b>Longitude: </b> {school['LONGITUDE']}</div>
<div><b>Website: </b> <a href={school['INSTURL']}>{school['INSTURL']}</a></div>
<div><b>Locale: </b> {getLocale(school['LOCALE'])}</div>
{#if school['PROGRAMS'].length > 0}
  <div>
    <b>Programs:</b>
    <ul class="programs">
      {#each school['PROGRAMS'] as program}
        <li>{programs[program]}</li>
      {/each}
    </ul>
  </div>
{/if}
