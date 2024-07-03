<template>
  <div class="container pb-5">
    <h1 class="mb-0 text-danger p-5">Profile</h1>
    <div class="col d-block d-md-flex">
      <img src="https://i.ibb.co/dg3pmsj/AGXqz-Dm1-PCZQku-Zfro9-Khe2-AXFk-Pxc-I6od-H0j8-JVE6-Hydsx-BGNo-Fmon-R2-Pb-N-5el-Dv-Mv-Xk1-f-N1-IUPZV.png" alt="Google Drive Image" class="home1 mb-5 img-fluid rounded-bottom-circle bg-white" loading="lazy" /> 
      <div class="abts text-start d-block">
        <h3 class="text-white mt-3"><span class="text-danger">Full Name</span>: Lebu Mtomboti</h3>
        <h3 class="text-white mt-3"><span class="text-danger">Date Of Birth</span>: 04 March 2002</h3>
        <h3 class="text-white mt-3"><span class="text-danger">Gender</span>: Female</h3>
        <h3 class="text-white mt-3"><span class="text-danger">Language</span>: English & Xhosa</h3>
        <h3 class="text-white mt-3"><span class="text-danger">Hobbies</span>: Reading Books</h3>
        <h3 class="text-white mt-3"><span class="text-danger">Cell Number</span>: 0833509812</h3>
        <h3 class="text-white mt-3"><span class="text-danger">Email</span>: lebomtomboti17@gmail.com</h3>
      </div>
    </div>
    <h1 class="mb-0 text-danger p-5">About Me</h1>
    <div class="text-white">
      <p v-for="paragraph in aboutParagraphs" :key="paragraph">{{ paragraph }}</p>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    aboutParagraphs() {
      return this.$store.state.about.paragraphs; 
    }
  },
  mounted() {
    this.$store.dispatch("fetchAbout");
  }
};
</script>
