import {
  createStore,
  GetterTree,
  Store,
  useStore as baseUseStore,
  ActionTree,
  MutationTree,
} from "vuex";
import { InjectionKey } from "vue";
export type User = { id: number; login: string };
export type Categorie = {
  id: number;
  libelle: string;
  user_id: string;
  createdAt?: string;
  updatedAt?: string;
};
export type Concert = {
  id: number;
  libelle: string;
  nom: string;
  description: string;
  image: string;
  date: string;
  heure: string;
  createdAt?: string;
  updatedAt?: string;
};

import axios from "axios";
//export type ;
export type State = {
  users: User[];
  role: string;
  id: number;
  categories: Categorie[];
  concerts: Concert[];
  concert: Concert;
};

//import TodoEditPageVue from '@/views/TodoEditPage.vue'

const state: State = {
  users: [],
  categories: [],
  concerts: [],
  role: "",
  id: 0,
  concert: {
    id: 0,
    libelle: "",
    nom: "",
    description: "",
    image: "",
    date: "",
    heure: "",
  },
};

const getters: GetterTree<State, State> = {
  getAllUsers: (state) => {
    return state.users;
  },
  getAllConcerts: (state) => {
    return state.concerts;
  },
  getAllCategories: (state) => {
    return state.categories;
  },
  getRole: (state) => {
    return state.role;
  },
  getId: (state) => {
    return state.id;
  },
  getConcert: (state) => {
    return state.concert;
  },
};

const actions: ActionTree<State, State> = {
  login(context, data) {
    const d={"login":data.login,"password":data.password};
    return axios
      .post("http://localhost:8082/api/user/login",d,{
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        console.log(response);
        return { status: response.status, message: response.statusText };
      })
      .catch((error) => {
        console.log(error);
        return { status: error.status, message: error };
      });
  },addUser(context, data) {
    return axios
      .post("http://localhost:8082/api/user/register",{"login":data.login,"password":data.password,role:data.role})
      .then((response) => {
        console.log(response);
        return { status: response.status, message: response.statusText };
      })
      .catch((error) => {
        console.log(error);
        return { status: error.status, message: error };
      });
  },addCategorie(context, data) {
    return axios
      .post("http://localhost:8082/api/categories",{"libelle":data.libelle})
      .then((response) => {
        console.log(response);
        return { status: response.status, message: response.statusText };
      })
      .catch((error) => {
        console.log(error);
        return { status: error.status, message: error };
      });
  },
  deleteCategorie(state, id) {
    return axios
      .delete("http://localhost:8082/api/categories/" + id)
      .then((response) => {
        return { status: response.status, message: response.statusText };
      })
      .catch((error) => {
        console.log(error);
        return { status: error.status, message: error };
      });
  },
  deleteConcert(state, id) {
    return axios
      .delete("http://localhost:8082/api/concerts/" + id)
      .then((response) => {
        return { status: response.status, message: response.statusText };
      })
      .catch((error) => {
        console.log(error);
        return { status: error.status, message: error };
      });
  },
  deleteUser(state, id) {
    return axios
      .delete("http://localhost:8082/api/user/" + id)
      .then((response) => {
        return { status: response.status, message: response.statusText };
      })
      .catch((error) => {
        console.log(error);
        return { status: error.status, message: error };
      });
  },
  async getAllUsers(state) {
    const response = await axios.get("http://localhost:8082/api/user");
    state.commit("getAllUsers", response.data);
  },
  async getAllConcerts(state) {
    const response = await axios.get("http://localhost:8082/api/concerts");
    state.commit("getAllConcerts", response.data);
  },
  async getAllCategories(state) {
    const response = await axios.get("http://localhost:8082/api/categories");
    state.commit("getAllCategories", response.data);
  },
  async getConcert(state, id) {
    const response = await axios.get(
      "http://localhost:8082/api/concerts/" + id
    );
    state.commit("getConcert", response.data);
  },
  async getCategorie(state, id) {
    const response = await axios.get(
      "http://localhost:8082/api/categories/" + id
    );
    console.log(response);
    return response.data;
  },
};

const mutations: MutationTree<State> = {
  getAllUsers(state, users) {
    state.users = users;
  },
  getAllConcerts(state, concerts) {
    state.concerts = concerts;
  },
  getAllCategories(state, categories) {
    state.categories = categories;
  },
  getConcert(state, concert) {
    state.concert = concert;
  },
};

export const store = createStore<State>({ state, getters, actions, mutations });

export const key: InjectionKey<Store<State>> = Symbol();

export function useStore() {
  return baseUseStore(key);
}
