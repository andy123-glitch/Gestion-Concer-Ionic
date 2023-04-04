<template>
    <form @submit.prevent="submitForm1">
      <ion-label>Nom d'utilisateur</ion-label>
      <ion-textarea placeholder="Nom d'utilisateur" v-model="user.login"></ion-textarea>

      <ion-label>Mot de passe</ion-label>
      <ion-textarea placeholder="Mot de passe"  v-model="user.password"></ion-textarea>
        <ion-select placeholder="Selectionner une catégorie" v-model="user.role">
          <ion-select-option value="admin">admin</ion-select-option>
          <ion-select-option value="user">user</ion-select-option>
        </ion-select>
        <ion-button color="success" type="submit">Inscription</ion-button>
    </form>
  </template>
  
  <script lang="ts">
  import {
    IonSelect,
    IonSelectOption,
    IonButton,
    IonTextarea,
    IonLabel,
  } from "@ionic/vue";
  import { defineComponent } from "vue";
import { toRef } from "vue";
  
  export default defineComponent({
    name: "FormAddUser",
    components: {
      IonSelect,
    IonSelectOption,
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
  