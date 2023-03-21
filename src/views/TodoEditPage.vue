<template>
    <ion-page>
        <header-component page-title="Ajouter un todo"></header-component>

        <ion-content :fullscreen="true">
            <todoForm :todo_props="todo" @submit-form="saveTodo"></todoForm>
        </ion-content>
    </ion-page>
</template>
  
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import { IonContent, IonPage } from "@ionic/vue";
import { useStore } from "../store";
import todoForm from "@/components/todoForm.vue";
import { useRoute, useRouter } from "vue-router";
import { defineComponent } from "vue";
import {afficherToast} from "../components/utils/toast.js";

export default defineComponent({
    name: "todoAdd",
    setup() {
        const router = useRouter();
        const store = useStore();
        const route = useRoute();
        const todoId = parseInt(route.params.id);
        const todo = store.getters.getTodoById(todoId);

        function saveTodo(todoEmit) {
            store.dispatch('editTodo', todoEmit).then((response) => {
                console.log(response);
                if (response.status === 200) {
                    afficherToast("Todo ajouté avec succès", "success");
                } else {
                    afficherToast("Une erreur est survenue", "danger");
                }
                router.push("/");
            });
        }



        //   const todo = {
        //     title: "fdfd",
        //     description: "fdfd",
        //     img: "",
        //   };


        return { saveTodo, todo };
    },
    components: { IonContent, IonPage, HeaderComponent, todoForm },
    // methods: {
    //     submitForm(){
    //         console.log(this.todo);
    //     }
    // },
});
</script>
  