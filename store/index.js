export const state = () => ({
    seocon: false
})

export const getters = {
    gseocon(state) {
        return state.seocon
    }
}

export const mutations = {
    mseocon(state, value) {
        state.seocon = value
    }
}

export const actions = {
    aseocon(context, value) {
        context.commit('mseocon', value)
    }
}
// export default new Vuex.Store({
//     state: {
//         seocon: 'test'
//     },
//     mutations: {
//         mseocon(state, value) {
//             state.seocon = value
//         }
//     },
//     actions: {
//         aseocon(context, value) {
//             context.commit('mseocon', value)
//         }
//     },
//     getters: {
//         gseocon(state) {
//             return state.seocon
//         }
//     },
//     modules: {
//     }
//   })