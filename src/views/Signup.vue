<!-- TEMPLATE -->
<template>
  <div id="signup">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="container">
      <div class="form-container mx-auto">
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <div class="form-group">
              <a href="/login" class="">Back to login page</a>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<!-- SCRIPT -->
<script>
  export default {
    name: 'Signup',
    data(){
      return{
        
      }
    }
  }
</script>
<!-- STYLE -->
<style>
#signup {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.form-container{
  max-width: 400px;
}
</style>