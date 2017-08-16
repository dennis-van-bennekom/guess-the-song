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
        }
    },
    actions: {
        receiveCategories ({ commit }) {
            commit('setLoading', true);

            axios.get('/api/categories')
                .then(categories => {
                    commit('storeCategories', categories);
                    commit('setLoading', false);
                });
        },

        receivePlaylists ({ commit }, id) {
            commit('setLoading', true);

            axios.get(`/api/playlists/${id}`)
                .then(playlists => {
                    commit('storePlaylists', playlists);
                    commit('setLoading', false);
                });
        },

        receiveSongs ({ commit }, userId, playlistId) {
            commit('setLoading', true);

            axios.get(`/api/songs/${userId}/${playlistId}`)
                .then(songs => {
                    commit('storeSongs', songs);
                    commit('setLoading', false);
                });
        }
    }
});