<template>
  <ion-page>
    <ion-content >
      <FormAdd :user_props="user" @submit-form="AddUser"/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonPage,

} from "@ionic/vue";
import FormAdd from "../components/FormAddUser.vue";
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "AddUtilisateur",
  components: {
    IonContent,
    IonPage,
    FormAdd,
  },setup() {
    const store = useStore();
    const user = {
      login: "",
      password: "",
      role:""
    };
    const router = useRouter();

    function AddUser(userEmit: any) {
      console.log(user);
      store.dispatch("addUser", user).then((response) => {
        if (response.status === 201) {
        router.push("/list/utilisateurs");
        }
      });
    }
    return { AddUser, user };
  },

});
</script>

<style scoped>

</style>
