<template>
  <ion-header>
    <ion-toolbar>
      <ion-button slot="start" color="tertiary" :href="pageRetour"
        >Retour
        <ion-icon slot="start" :icon="arrowBack" />
      </ion-button>
      <ion-buttons slot="end">
        <ButtonDeconnexion/>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>
<script lang="ts">
import { IonHeader, IonToolbar, IonButton, IonButtons } from "@ionic/vue";
import { defineComponent } from "vue";
import ButtonDeconnexion from "./ButtonDeconnexion.vue";
import { arrowBack } from "ionicons/icons";

export default defineComponent({
  name: "HeaderDecoRetour",
  components: {
    IonHeader,
    IonToolbar,
    IonButton,
    IonButtons,
    ButtonDeconnexion,
  },
  setup() {
    return { arrowBack };
  },
  props: ["pageRetour"],
});
</script>
