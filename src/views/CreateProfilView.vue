<template>
  <div class="card grey-bg profil-card">
    <h1 class="card__title" >Créer un nouveau profil <img src="user.png" width="40" height="40" alt="icone"></h1>
    
    <div class="form-row " >
      <input v-model="pseudo" class="form-row__input form-control" type="text" placeholder="Pseudo"/>
    </div>
    <div class="form-row">
      <input v-model="email" class="form-row__input form-control" type="text" placeholder="Adresse mail"/>
    </div>
    <div class="form-row">
      <input v-model="password" class="form-row__input form-control" type="password" placeholder="Mot de passe"/>
    </div>
     <div class="form-row">
      <input v-model="password2" class="form-row__input form-control" type="password" placeholder="confirmer mot de passe"/>
    </div>
    <div class="form-row">
      <button  class="btn btn-success">  
        Créer un nouveau profil
      </button>
    </div>
  </div>
</template>

