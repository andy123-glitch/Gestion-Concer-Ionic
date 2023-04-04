<template>
  <div class="box">
    <IonLabel>ID utilisateur : {{ user.id }}</IonLabel>
    <br />
    <IonLabel>Login : {{ user.login }}</IonLabel>
    <br />
    <BtnSuppr api="deleteUser" :id="user.id"/>
    
  </div>
</template>

<script lang="ts">
import { IonLabel } from "@ionic/vue";
import { defineComponent } from "vue";
import BtnSuppr from "./ButtonSuppr.vue";

export default defineComponent({
  name: "BlocUtilisateur",
  props: ["user"],
  components: {  IonLabel,BtnSuppr },

});
</script>

<style>
.box {
  border: 5px solid black;
  border-radius: 10px;
  margin: 0% 10%;
  text-align: center;
  width: 100%;
  padding: 10px;

}
</style>
