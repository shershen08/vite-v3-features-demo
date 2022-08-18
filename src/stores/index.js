import { createStore } from 'vuex'

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
        news: []
      }
    },
    mutations: {
      increment (state) {
        state.count++
      },
      setValue (state, value) {
        state.count = value
      }
    },
    actions: {
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
  