<template>
  <div class="box">
    <ion-list>
      <ion-item>
        <IonLabel >Concert de {{ concert.nom }}</IonLabel>
        <IonLabel slot="end"><ion-icon slot="start" :icon="pricetags" /> {{ concert.libelle }}</IonLabel>
      </ion-item>
      <ion-item>
        <IonLabel><ion-icon slot="start" :icon="calendar" /> {{ concert.date }}</IonLabel>
        <IonLabel slot="end"><ion-icon slot="start" :icon="time"></ion-icon> {{ concert.heure }}</IonLabel>
      </ion-item>
      <ion-item>
        <IonText>Description : {{ concert.description }}</IonText>
      </ion-item>
      <div style="display: inline-flex;">
        <ion-button :href="`/details/concert/${concert.id}`" color="tertiary">
          <ion-icon slot="start" :icon="eye" />Voir
        </ion-button>
        <BtnMdf/>
        <BtnSuppr api="deleteConcert" :id="concert.id"/>
      </div>
    </ion-list>
  </div>
</template>

<script lang="ts">
import { IonButton, IonLabel, IonIcon,IonList,IonItem,IonText} from "@ionic/vue";
import { defineComponent } from "vue";
import { trash, create,time,eye,pricetags,calendar } from "ionicons/icons";
import BtnSuppr from "./ButtonSuppr.vue";
import BtnMdf from "./ButtonModifer.vue";

export default defineComponent({
  name: "BlocConcert",
  props: ["concert"],
  components: { IonButton, IonLabel, IonIcon,IonList,IonItem,IonText,BtnMdf,BtnSuppr },
  setup() {
    return { trash, create,eye,pricetags,calendar,time };
  },
});
</script>

<style>
.box {
  border: 5px solid black;
  border-radius: 10px;
  margin: 0% 10%;
  text-align: center;
  padding: 10px;
  width: 100%;


}
</style>
