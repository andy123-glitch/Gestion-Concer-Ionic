<template>
  <HeaderDecoAdd link-btn-add="/add/concert"  />
  <ion-content>
    <ion-list lines="none">
      <ion-item>
        <ion-label>Retrouver la liste des concerts en dessous</ion-label>
      </ion-item>
      <ion-item v-for="concert in concerts" v-bind:key="concert.id">
        <BlocConcert :concert="concert" />
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script lang="ts">
import { IonContent, IonLabel, IonItem, IonList } from "@ionic/vue";
import { computed, defineComponent } from 'vue';
import BlocConcert from "../components/BlocConcert.vue";
import HeaderDecoAdd from "../components/HeaderDecoAdd.vue";
import { useStore } from "../store";

export default defineComponent({
  name: "ListConcerts",
  components: {
    IonContent,
    IonLabel,
    IonItem,
    IonList,
    BlocConcert,
    HeaderDecoAdd,
  },
  setup() {
    const store =useStore();
      store.dispatch("getAllConcerts");
      const concerts =computed(() => {
        return store.getters.getAllConcerts;
      } )
      console.log(concerts);
      return {concerts};
  },
});
</script>

<style scoped>
ion-item {
  text-align: center;
  margin-bottom: 10px;
}
</style>
