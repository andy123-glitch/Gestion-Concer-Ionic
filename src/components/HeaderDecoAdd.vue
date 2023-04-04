<template>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="end">
          <ButtonDeconnexion></ButtonDeconnexion>
          <ion-button fill="solid" color="success" :href=" linkBtnAdd ">
            <ion-icon slot="start" :icon="duplicate"/>
          </ion-button>
        </ion-buttons>
      
      </ion-toolbar>
    </ion-header>
  </template>
  <script lang="ts">
  import {
    IonHeader,
    IonIcon,
    IonToolbar,
    IonButton,
    IonButtons
  } from "@ionic/vue";
  import { defineComponent } from "vue";
  import ButtonDeconnexion from './ButtonDeconnexion.vue'
import { duplicate } from 'ionicons/icons';
  
  export default defineComponent({
    name: "HeaderDecoAdd",
    components: {
      IonHeader,
    IonToolbar,
    IonButton,
    IonButtons,
    IonIcon,
    ButtonDeconnexion
    },
    setup() {
      return { duplicate };
    },
    props:["linkBtnAdd"]
  });
  </script>

  