<template>
  <div>
    <article v-for="article in articles" :key="article.id">
      <div class="card">
        <div class="card-header d-flex">
          <div class="text-size p-2">
            {{ article.pseudo }}
            <img
              class="image-ronde"
              src="https://thispersondoesnotexist.com/image"
              alt="personne"
            />
          </div>
          <div class="date ms-auto p-2">posté le {{article.date}}</div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <img :src="article.urlImgArticle" alt="image">
          </li>
          <li class="list-group-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            veritatis culpa, quod eius quaerat dolor aperiam nobis modi eaque
            est repudiandae eum nisi obcaecati at aliquam natus libero id!
            Nobis!
          </li>
          <li class="list-group-item grey-bg">
            <img class="icone" src="commentaire.png" alt="icone" /> <span class="badge bg-success">{{}}nb </span>
            <img class="icone" src="like.png" alt="icone" /> <span class="badge bg-danger">{{article.like}} </span>
          </li>
          <li class="list-group-item text-size">Commentaires :</li>
          <li class="list-group-item text-size"></li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script>
  


export default {
  data() {
    return {
      articles: [],
    };
  },
  mounted: function () {
    fetch("http://localhost:8000/articles")
      .then((reponse) => reponse.json())
      .then((data) => {
        console.log(data);
        this.articles = data;
  
      });
  },  
};
</script>