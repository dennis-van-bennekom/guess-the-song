import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        categories: [],
        playlists: [],
        songs: [],
        loading: false
    },
    mutations: {
        setLoading (state, isLoading) {
            state.loading = isLoading;
        },

        storeCategories (state, categories) {
            state.categories = categories;
        },

        storePlaylists (state, playlists) {
            state.playlists = playlists;
        },

        storeSongs (state, songs) {
            state.songs = songs;
        },

        emptyPlaylists (state) {
            state.playlists = [];
        }
    },
    actions: {
        receiveCategories ({ commit }) {
            commit('setLoading', true);

            axios.get('/api/categories')
                .then(({data}) => {
                    commit('storeCategories', data);
                    commit('setLoading', false);
                });
        },

        receivePlaylists ({ commit }, id) {
            commit('setLoading', true);

            axios.get(`/api/playlists/${id}`)
                .then(({data}) => {
                    commit('storePlaylists', data);
                    commit('setLoading', false);
                });
        },

        receiveSongs ({ commit }, userId, playlistId) {
            commit('setLoading', true);

            axios.get(`/api/songs/${userId}/${playlistId}`)
                .then(({data}) => {
                    commit('storeSongs', data);
                    commit('setLoading', false);
                });
        }
    }
});