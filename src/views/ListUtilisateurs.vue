<template>
  <HeaderDecoAdd link-btn-add="/add/utilisateur" />
  <ion-content class="ion-padding">
    <ion-list lines="none">
      <ion-item>
        <ion-label>Retrouver la liste des utilisateurs en dessous</ion-label>
      </ion-item>
      <ion-item v-for="user in users" v-bind:key="user.index">
        <BlocUtilisateur :user="user"></BlocUtilisateur>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script lang="ts">
import { IonContent, IonLabel, IonItem, IonList } from "@ionic/vue";
import { computed, defineComponent } from 'vue';
import BlocUtilisateur from "../components/BlocUtilisateur.vue";
import { useStore } from "../store";
import HeaderDecoAdd from "../components/HeaderDecoAdd.vue";

export default defineComponent({
  name: "ListCategories",
  components: {
    IonContent,
    IonLabel,
    IonItem,
    BlocUtilisateur,
    IonList,
    HeaderDecoAdd,
  },
  setup() {
    const store =useStore();
      store.dispatch("getAllUsers");
      //const todos= store.state.todos,
      const users =computed(() => {
        return store.getters.getAllUsers;
      } )
      console.log(users);
      return {users};
  },
});
</script>

<style scoped>
ion-item {
  text-align: center;
  margin-bottom: 10px;
}
</style>
