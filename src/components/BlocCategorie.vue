<template>
  <div class="box">
    <IonLabel>Categorie {{ categorie.libelle }}</IonLabel>
    <div style="display: inline-flex;">
      <BtnMdf/>
      <BtnSuppr api="deleteCategorie" :id="categorie.id"/>
    </div>
  </div>
</template>

<script lang="ts">
import {IonLabel} from "@ionic/vue";
import { defineComponent } from "vue";
import BtnSuppr from "./ButtonSuppr.vue";
import BtnMdf from "./ButtonModifer.vue";

export default defineComponent({
  name: "BlocCategorie",
  props: ["categorie"],
  components: {  IonLabel, BtnMdf,BtnSuppr },

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
