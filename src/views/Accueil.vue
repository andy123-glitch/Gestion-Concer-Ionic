<template>
  <ion-page>
    <ion-content >
      <ion-img
        src="https://i.imgur.com/rFU94E8.jpeg"
        alt="Une image prise lors d'un concert"
      ></ion-img>
      <ion-label>Bievenue sur la partie admin de l'application my Concert</ion-label
      >
      <br />
      <ion-button href="/add/concert" fill="solid" color="primary">
        <ion-icon slot="start" :icon="addCircle" />Créer un concert
      </ion-button>
      <br />

      <ion-button href="/list/concerts" color="tertiary">
        <ion-icon slot="start" :icon="reorderFour" />Gérer les concerts
      </ion-button>
      <br />

      <ion-button href="/list/categories" color="warning">
        <ion-icon slot="start" :icon="pricetags" />Gérer les catégories
      </ion-button>
      <br />
      <ion-button href="/list/utilisateurs" color="success">
        <ion-icon slot="start" :icon="people" />Gérer les utilisateurs
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonImg, IonLabel, IonIcon,IonButton } from "@ionic/vue";
import { defineComponent } from "vue";
import { reorderFour, pricetags, people, addCircle } from "ionicons/icons";

export default defineComponent({
  name: "AccueilPage",
  components: {
    IonButton,
    IonContent,
    IonPage,
    IonImg,
    IonLabel,
    IonIcon,
  },
  setup() {
    return { reorderFour, pricetags, people, addCircle };
  },
});
</script>

<style scoped>
ion-content {
  text-align: center;
}
</style>
