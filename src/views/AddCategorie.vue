<template>
  <ion-page>
    <ion-content >
       <FormAddCategorie :categorie_props="categorie" @submit-form="AddCategorie"/>
      </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonPage,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "@/store";
import FormAddCategorie from "../components/FormAddCategorie.vue";

export default defineComponent({
  name: "AddCategorie",
  components: {
    FormAddCategorie,
    IonPage,
  IonContent,
  },setup() {
    const store = useStore();
    const categorie = {
      libelle: ""
    };
    const router = useRouter();

    function AddCategorie() {
      console.log(categorie);
      store.dispatch("addCategorie", categorie).then((response) => {
        if (response.status === 200) {
        router.push("/list/categories");
        }
      });
    }
    return { AddCategorie, categorie };
  },
});
</script>

<style scoped>

</style>
