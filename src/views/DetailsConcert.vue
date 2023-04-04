<template>
  <ion-page>
    <HeaderDecoRetour pageRetour="/list/concerts"/>
    <ion-content >
      <ion-list lines="none">
          <div style="position: relative;">
            <ion-img
            :src="concert.image"
            alt="Une image prise lors d'un concert"
            style="height: 500px ; left: 50%;"
          ></ion-img>
          </div>
          
        <ion-item>
          <ion-label style="font-size: 50px;">Concert de {{ concert.nom }} </ion-label>  
        </ion-item>
        <ion-item>
          <ion-label><ion-icon :icon="pricetags" />{{ concert.categorie_id }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Description :</ion-label>
        </ion-item>
        <ion-item>
          <ion-text>
            {{ concert.description }}
          </ion-text>
        </ion-item>
        <ion-item>
          <ion-label slot="start"><ion-icon :icon="calendar"></ion-icon> {{ concert.date }}</ion-label>
          <ion-label><ion-icon :icon="time"></ion-icon> {{ concert.heure }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-button color="warning">
            <ion-icon slot="start" :icon="create" />Modifier
          </ion-button>
          <ion-button  href="/" color="danger">
            <ion-icon slot="start" :icon="trash" />Supprimer
          </ion-button>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonImg, IonLabel, IonIcon,IonButton,IonText,IonList,IonItem } from "@ionic/vue";
import { computed,defineComponent } from "vue";
import { pricetags,calendar,time,trash,create} from "ionicons/icons";
import { useStore } from '@/store';
import { useRoute } from 'vue-router';
import HeaderDecoRetour from '../components/HeaderDecoRetour.vue'



export default defineComponent({
  name: "AccueilPage",
  components: {
    IonButton,
    IonList,IonItem,
    IonContent,
    IonPage,
    IonImg,
    HeaderDecoRetour,
    IonText,
    IonLabel,
    IonIcon,
  },
  setup() {
    const route = useRoute();
    const id = parseInt(route.params.id as string);

    const store =useStore();
      store.dispatch("getConcert",id);
      const concert =computed(() => {
        return store.getters.getConcert;
      } )
      console.log(concert);


    return {  concert,pricetags,calendar,time,trash,create };
  },
});
</script>

<style scoped>
ion-item {
  display: flexbox;
  text-align: center;

}
</style>
