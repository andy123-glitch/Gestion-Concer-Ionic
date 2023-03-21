import { createStore, GetterTree, Store, useStore as baseUseStore, ActionTree, MutationTree } from "vuex"
import { InjectionKey } from "vue";
export type Todo = { id: number, title: string, description?: string, img?: string, createdAt?: string, updatedAt?: string };
import axios from "axios";
//export type ;
export type State = { todos: Todo[],/*categories:Category[]*/ }

//import TodoEditPageVue from '@/views/TodoEditPage.vue'

const state: State = {
    todos: []
}

const getters: GetterTree<State, State> = {
    getAllTodos: (state) => { return state.todos },
    getTodoById: (state) => (id: number) => state.todos.find(todo => todo.id === id)
}

const actions: ActionTree<State, State> = {
    addTodo(context, newTodo) {

        return axios.post('http://localhost:8082/api/todos', newTodo).then((response) => {
            if (response.status === 200) {
                context.commit("addTodo", newTodo);
            }
            return { "status": response.status, "message": response.statusText }
        }).catch((error) => {
            console.log(error);
            return { "status": error.status, "message": error }
        })



    },
    deleteTodo(context, id) {

        return axios.delete('http://localhost:8082/api/todos/'+id).then((response) => {
            if (response.status === 200) {
                context.commit("deleteTodo", id);
            }
            return { "status": response.status, "message": response.statusText }
        }).catch((error) => {
            console.log(error);
            return { "status": error.status, "message": error }
        })

    },
    editTodo(context, editTodo) {

        return axios.put('http://localhost:8082/api/todos/' + editTodo.id,  editTodo ).then((response) => {
            if (response.status === 200) {
                context.commit("addTodo", editTodo);
            }
            return { "status": response.status, "message": response.statusText }
        }).catch((error) => {
            console.log(error);
            return { "status": error.status, "message": error }
        })
        context.commit("editTodo", editTodo);
    }, async getTodos(state) {
        const todos = await axios.get("http://localhost:8082/api/todos");
        state.commit("GET_TODO", todos.data);
    }
}

const mutations: MutationTree<State> = {
    addTodo(state, newTodo) {
        const todoFormated = {
            title: newTodo.title,
            description: newTodo.description,
            img: newTodo.img,
            id: state.todos.length
        }

        state.todos.push(todoFormated);
    },
    deleteTodo(state, todo_id) {
        const index = state.todos.findIndex(todo => todo.id === todo_id);

        state.todos.splice(index, 1);
    }, editTodo(state, editTodo) {
        const index = state.todos.findIndex(todo => todo.id === editTodo);
        state.todos[index] = editTodo;

    }, GET_TODO(state, todos) {
        state.todos = todos;
    }

}

export const store = createStore<State>({ state, getters, actions, mutations })

export const key: InjectionKey<Store<State>> = Symbol();

export function useStore() {
    return baseUseStore(key);
}