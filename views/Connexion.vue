<template>
  <ion-page>
    <ion-content>
      <FormLogin :user_props="user" @submit-form="loginUser"></FormLogin>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import { defineComponent } from "vue";
import FormLogin from "../components/FormLogin.vue";
import { useStore } from "../store";

export default defineComponent({
  name: "ConnexionPage",
  components: {
    IonPage,
    IonContent,
    FormLogin,
  },
  setup() {
    const store = useStore();
    const user = {
      login: "iutlpro",
      password: "iutlpro",
    };

    function loginUser(userEmit: any) {
      console.log(user);
      store.dispatch("login", user).then((response) => {
        //console.log(response + userEmit);
        if (response.status === 200) {
          //afficherToast("Todo ajouté avec succès", "success");
        } else {
          //afficherToast("Une erreur est survenue", "danger");
        }
        //router.push("/");
      });
    }
    return { loginUser, user };
  },
});
</script>
