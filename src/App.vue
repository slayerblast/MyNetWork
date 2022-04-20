<template>
<div className="container">
  <div className="row">
    <div className="col-2"> 
      <span className="titre">MonEspace</span> <img src="Myspace.svg.png" width="40" height="40" alt="icone">
      <table class="table table-bordered">
      <tbody>
        <tr>
        <th scope="row"><RouterLink to="/"><img src="house.png" width="25" height="25" alt="icone">Fils d'actualités</RouterLink></th>
        </tr>
        <tr>
          <th scope="row"><RouterLink :to="{name : 'createprofil'}"><img src="user.png" width="25" height="25" alt="icone">Créer un profil</RouterLink></th>
        </tr>
        <tr>
          <th scope="row"><RouterLink :to="{name : 'connexion'}"><img src="link.png" width="25" height="25" alt="icone">Se connecter</RouterLink></th>
        </tr>
      </tbody>
    </table>
    </div>
    <div className="col-10">
      <RouterView />
    </div>
    </div>
  </div>

</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/style.css'
</script>