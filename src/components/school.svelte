<script>
  export let school;
  import { getContext } from 'svelte';
  import MoreDetails from './moreDetails.svelte';
  const { open } = getContext('simple-modal');


  const highestDegree = (highestDegreeInt) => {
    switch (highestDegreeInt) {
      case 0:
        return "Non-degree granting";
      case 1:
        return "Certificate Degree";
      case 2:
        return "Associate Degree";
      case 3:
        return `Bachelor's Degree`;
      case 4:
        return "Graduate Degree";
      default:
        return "Not Available";
    }
  };

  const carnegieClassification = (ccInt) => {
    switch (ccInt) {
      case -2:
        return "Not applicable";
      case 0:
        return "(Not classified)";
      case 1:
        return "Two-year, very small";
      case 2:
        return "Two-year, small";
      case 3:
        return "Two-year, medium";
      case 4:
        return "Two-year, large";
      case 5:
        return "Two-year, very large";
      case 6:
        return "Four-year, very small, primarily nonresidential";
      case 7:
        return "Four-year, very small, primarily residential";
      case 8:
        return "Four-year, very small, highly residential";
      case 9:
        return "Four-year, small, primarily nonresidential";
      case 10:
        return "Four-year, small, primarily residential";
      case 11:
        return "Four-year, small, highly residential";
      case 12:
        return "Four-year, medium, primarily nonresidential";
      case 13:
        return "Four-year, medium, primarily residential";
      case 14:
        return "Four-year, medium, highly residential";
      case 15:
        return "Four-year, large, primarily nonresidential";
      case 16:
        return "Four-year, large, primarily residential";
      case 17:
        return "Four-year, large, highly residential";
      case 18:
        return "Exclusively graduate/professional";
    }
  };

  const valueOrNA = (value) => {
    return (value !== null && value !== 'NULL' && !isNaN(value)) ? value : 'Not Available';
  }

  const moreDetails = () => {
    open(MoreDetails, { school: school });
  };

  const formatPercent = (decimal) => {
    if (decimal === 'Not Available') {
      return decimal;
    } else {
      return Math.round(decimal * 10000) / 100 + '%';
    }
  }
</script>

<style>
</style>

<tr>
  <td>{school['INSTNM']}</td>
  <td>{school['CITY']}, {school['STABBR']}</td>
  <td>{formatPercent(valueOrNA(parseFloat(school['ADM_RATE'])))}</td>
  <td>{valueOrNA(parseInt(school['SAT_AVG']))}</td>
  <td>{highestDegree(parseInt(school['HIGHDEG']))}</td>
  <td>{carnegieClassification(parseInt(school['CCSIZSET']))}</td>
  <td><a href={school['INSTURL']}>{school['INSTURL']}</a>
  <td><button on:click={moreDetails}>More Details</button></td>
</tr>
