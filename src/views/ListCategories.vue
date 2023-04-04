<template>
  
    <HeaderDecoAdd link-btn-add="/add/categorie"/>
    <ion-content class="ion-padding" >
      <ion-list lines="none">
        <ion-item>
          <ion-label>Retrouver la liste des concerts en dessous</ion-label>
        </ion-item>
        <ion-item v-for="categorie in categories" v-bind:key="categorie.id">
          <BlocCategorie :categorie="categorie" />
        </ion-item>
      </ion-list>
    </ion-content>
</template>

<script lang="ts">
import {
  IonContent,
  IonLabel,
  IonItem,
  IonList,
} from "@ionic/vue";
import { computed,defineComponent } from "vue";
import BlocCategorie from "../components/BlocCategorie.vue";
import HeaderDecoAdd from '../components/HeaderDecoAdd.vue';
import { useStore } from "../store";

export default defineComponent({
  name: "ListCategories",
  components: {
    IonContent,
    IonLabel,
    IonItem,
    IonList,
    BlocCategorie,
    HeaderDecoAdd,
   
  },
  setup() {
    const store =useStore();
      store.dispatch("getAllCategories");
      const categories =computed(() => {
        return store.getters.getAllCategories;
      } )
      console.log(categories);
      return {categories};
  },

});
</script>

<style scoped>
ion-item {
  text-align: center;
  margin-bottom: 10px;
}
</style>
