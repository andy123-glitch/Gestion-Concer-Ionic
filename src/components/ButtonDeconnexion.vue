<template>
  <div>
      <ion-button fill="solid" color="danger" href="/"><ion-icon slot="start" :icon="logOut"/>Déconnexion</ion-button>
    </div>
  </template>
  
  
  <script lang="ts">
  import { IonButton,IonIcon  } from '@ionic/vue';
  import { defineComponent } from 'vue';
import { logOut } from 'ionicons/icons';

  
    export default defineComponent({
      name:"ButtonDeconnexion",
      components: { IonButton,IonIcon },
      setup() {
      return { logOut };
    },
    });
  </script>
