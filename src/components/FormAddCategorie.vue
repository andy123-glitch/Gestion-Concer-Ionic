<template>
    <form @submit.prevent="submitForm1">
       <ion-label>Nom de la categorie </ion-label>
      <ion-textarea v-model="categorie.libelle"/>
      <ion-button color="success" type="submit"><ion-icon slot="start" :icon="duplicate"/>Ajouter la categorie</ion-button>
    </form>
  </template>
  
  <script lang="ts">
  import {
    IonButton,
    IonTextarea,
    IonLabel,
    IonIcon,
  } from "@ionic/vue";
  import { defineComponent } from "vue";
import { toRef } from "vue";
import { duplicate } from 'ionicons/icons';

  
  export default defineComponent({
    name: "FormAddCategorie",
    components: {
      IonIcon,
      IonButton,
      IonTextarea,
      IonLabel,
    },
    emits: ["submitForm"],
    props:["categorie_props"],
  setup(props, context) {
    const categorie = toRef(props, "categorie_props");

    function submitForm1() {
      context.emit("submitForm", categorie);
    }
    return { submitForm1, categorie,duplicate };
  }
  });
  </script>
  