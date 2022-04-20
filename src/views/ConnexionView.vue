<template>
  <div class="card grey-bg profil-card">
    <h1 class="card__title" >Connexion <img src="user.png" width="40" height="40" alt="icone"></h1>
    <div class="form-row">
      <input v-model="email" class="form-row__input form-control" type="text" placeholder="Adresse mail"/>
    </div>
    <div class="form-row">
      <input v-model="password" class="form-row__input form-control" type="password" placeholder="Mot de passe"/>
    </div>
    <div class="form-row">
      <button  class="btn btn-success">  
        se connecter
      </button>
    </div>
  </div>
</template>