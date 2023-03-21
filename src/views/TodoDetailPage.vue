<template>
  <ion-page>

    <header-component v-if="todo" :page-title="todo.title" page-default-back-link="Home"></header-component>

    <ion-content id="container" v-if="todo">
      <ion-img :src="todo.img" alt="The Wisconsin State Capitol building in Madison, WI at night"></ion-img>

      <h1>{{ todo.title }}</h1>
      <p>{{ todo.description }}</p>

      <ion-button color="warning" :router-link="`/todo/edit/${todo.id}`">Modifier</ion-button>
      <ion-button color="danger" @click="deleteTodo(todo.id)">Supprimer</ion-button>
    </ion-content>
  </ion-page>
</template>

<script >
import { IonContent, IonPage, IonImg, alertController, IonButton } from '@ionic/vue';
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';
import { useRoute, useRouter } from 'vue-router';
import {afficherToast} from "../components/utils/toast.js";


export default defineComponent({
  name: "TodoDetailPage",
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const todoId = parseInt(route.params.id);



    const deleteTodo = async (id) => {
      const alert = await alertController.create({
        header: "Etes vous sur de vouloir supprimer cette tâche?",
        buttons: [
          {
            text: "Annuler",
            role: "cancel",
          },
          {
            text: "Oui, Supprimer",
            role: "confirm",
            handler: () => {
              store.dispatch("deleteTodo", id).then((response) => {
                console.log(response);
                if (response.status === 200) {
                  afficherToast("Todo ajouté avec succès", "success");
                } else {
                  afficherToast("Une erreur est survenue", "danger");
                }
                router.push('/');
              });
            }
          }
        ]
      });
      await alert.present();
    };
    //const todos= store.state.todos,
    const todo = computed(() => {
      return store.getters.getTodoById(todoId);
    })
    return { todo, deleteTodo };
  },

  // data : ()=>{
  //   test:"test"
  // },
  components: { IonContent, IonPage, IonImg, IonButton },
});
</script>


<style scoped>
ion-toast.toast-success {
  --background: rgb(0, 0, 0);
  --color: green;
  --box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.2);
}

ion-toast.toast-error {
  --background: black;
  --color: red;
  --box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.2);
}

#container {
  padding-left: 15px;
  padding-right: 15px;
}
</style>