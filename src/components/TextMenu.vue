<template>
    <h1>A <span class="historia">HISTÓRIA</span> EM UMA <br> <span class="space">g gg hg <br> </span> EXPERIÊNCIA <br> <span class="inovadora"> INOVADORA.</span></h1>
</template>

<script>

export default{
    name: 'TextMenu'
}

</script>

<style scoped>

section h1{
    font-family: 'Noto Sans', sans-serif;
    font-size: 53px;
    color: #2C3E50;
    font-weight: 500;
    position: absolute;
    left: 250px;
    top: 50%;
    transform: translateY(-50%);
    scale: 1.4;
  }
  section h1 .historia{
    font-weight: 600;
    font-style: italic;
    color: #23313f;
  }
  section h1 .space{
    font-family: 'Flow Circular' , sans-serif;
  }
  section h1 .inovadora{
  color: #fff;
  font-family: 'Montserrat' , sans-serif;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 6.912px;
  background-color: #DD3526;
  padding: 0 5px 0 0;
  }

</style>