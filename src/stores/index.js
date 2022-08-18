import { createStore } from 'vuex'
import {loadUsers} from '@/services/users'

const createPersistPlugin = () => {
    return (store) => {
      store.subscribe(mutation => {
        localStorage.setItem(`state`, JSON.stringify(store.state.count))
      })
    }
  }

const store = createStore({
    state () {
      return {
        count: JSON.parse(localStorage.getItem(`state`)) || 0,
        userData: {},
        users: [],
        // usersData: {
        //   isLoading: false,
        //   data: []
        // }
      }
    },
    mutations: {
      increment (state) {
        state.count++
      },
      setValue (state, value) {
        state.count = value
      },
      setUsers (state, value){
        state.users = value
      }
    },
    actions: {
        loadUsers(store){
          loadUsers().then(response => {
            store.commit('setUsers', response.data)
          })
        },
        // A->M
        asyncIncrement(store){
            store.commit('increment') // +1
            //...
            // API <- 
            setTimeout(() => {
                store.commit('increment')
            }, 1000)
        }
    },
    plugins: [createPersistPlugin()]
  })

  export default store
  