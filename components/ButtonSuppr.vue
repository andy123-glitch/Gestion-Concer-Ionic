<template>
  <div>
    <ion-button color="danger" @click="deleteObject()">
      <ion-icon slot="start" :icon="trash"  />Supprimer
    </ion-button>
  </div>
</template>

<script lang="ts">
import { IonButton, IonIcon } from "@ionic/vue";
import { defineComponent } from "vue";
import { trash } from "ionicons/icons";
import { toRef } from "vue";
import { useRouter } from 'vue-router';

import { useStore } from "@/store";

export default defineComponent({
  name: "ButtonSuppr",
  props: ["api", "id"],
  components: { IonButton, IonIcon },
  setup(props) {
    const router = useRouter();
    const api = toRef(props, "api");
    const id = toRef(props, "id");
    const store = useStore();
    const deleteObject = () =>{
      console.log("id: " + id.value);
      store.dispatch(api.value, id.value).then((response) => {
        console.log(response);
        router.go(0);
      });
    }
    return { trash, deleteObject };
  },
});
</script>
