<template>
  <ion-page >
    <HeaderDecoRetour pageRetour="/list/concerts"/>
    <ion-content class="ion-padding" >
      <ion-label>Nom du concert : </ion-label>
      <ion-input placeholder="nom du concert"></ion-input>
      <ion-label>Description du concert </ion-label>
      <ion-textarea :rows="3" />
      <ion-datetime-button datetime="datetime"></ion-datetime-button>
      <ion-modal :keep-contents-mounted="true">
        <ion-datetime id="datetime"></ion-datetime>
      </ion-modal>
      <ion-select placeholder="Selectionner une catégorie">
        <ion-select-option value="Rock">Rock</ion-select-option>
        <ion-select-option value="Classique">Classique</ion-select-option>
        <ion-select-option value="Electro">Electro</ion-select-option>
      </ion-select>
      <ion-button color="success">Ajouter le concert</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonInput,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
  IonContent,
  IonPage,
  IonButton,
  IonTextarea,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import { defineComponent } from "vue";
import HeaderDecoRetour from '../components/HeaderDecoRetour.vue';

export default defineComponent({
  name: "AddConcert",
  components: {
    IonContent,
    HeaderDecoRetour,
    IonPage,
    IonInput,
    IonButton,
    IonTextarea,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonDatetime,
    IonDatetimeButton,
    IonModal,
  },
});
</script>

<style scoped>
ion-content{
  text-align: center;
}
</style>
