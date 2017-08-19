<template>
    <div class="container">
        <ul>
            <li v-for="playlist in playlists">
                <router-link :to="{ name: 'guess', params: { playlist: playlist.id }}">
                    {{ playlist.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import store from '../store';

    export default {
        created () {
            store.dispatch('receivePlaylists', this.$route.params.id);
        },
        computed: {
            playlists () {
                return store.state.playlists;
            }
        }
    }
</script>
