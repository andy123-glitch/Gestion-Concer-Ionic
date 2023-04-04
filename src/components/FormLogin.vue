<template>
    <form @submit.prevent="submitForm1">
      <div id="container">
          <ion-img
            src="https://i.imgur.com/rFU94E8.jpeg"
            alt="Une image prise lors d'un concert"
          ></ion-img>
          <ion-label>Nom d'utilisateur</ion-label>
          <ion-textarea placeholder="Nom d'utilisateur" v-model="user.login"></ion-textarea>
  
          <ion-label>Mot de passe</ion-label>
          <ion-textarea placeholder="Mot de passe"  v-model="user.password"></ion-textarea>
  
          <ion-button type="submit">Connexion</ion-button>
      </div>
    </form>
  </template>
  
  <script lang="ts">
  import {
    IonImg,
    IonButton,
    IonTextarea,
    IonLabel,
  } from "@ionic/vue";
  import { defineComponent } from "vue";
import { toRef } from "vue";
  
  export default defineComponent({
    name: "FormLogin",
    components: {
      IonImg,
      IonButton,
      IonTextarea,
      IonLabel,
    },
    emits: ["submitForm"],
    props:["user_props"],
  setup(props, context) {
    const user = toRef(props, "user_props");

    function submitForm1() {
      context.emit("submitForm", user);
    }
    return { submitForm1, user };
  }
  });
  </script>
  
  <style scoped>
  #container {
    text-align: center;
  
    position: absolute;
    left: 0;
    right: 0;
    top: 10%;
    transform: translateY(-50%);
  }
  ion-img {
    height: 300px;
    margin-bottom: 10px;
  }
  
  #container strong {
    font-size: 20px;
    line-height: 26px;
  }
  
  #container p {
    font-size: 16px;
    line-height: 22px;
  
    color: #8c8c8c;
  
    margin: 0;
  }
  
  #container a {
    text-decoration: none;
  }
  </style>
  