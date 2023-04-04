<template>
    <div>
      <ion-button color="warning">
        <ion-icon slot="start" :icon="create" />Modifier
        </ion-button>
    </div>
  </template>
  
  <script lang="ts">
  import { IonButton, IonIcon } from "@ionic/vue";
  import { defineComponent } from "vue";
  import { create } from "ionicons/icons";
  
  export default defineComponent({
    name: "ButtonModifier",
    components: { IonButton, IonIcon },
    setup() {
      return {  create };
    },
  });
  </script>
  

  