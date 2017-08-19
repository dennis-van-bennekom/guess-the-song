<template>
    <div class="container">
        <ul>
            <li v-for="category in categories">
                <router-link :to="{ name: 'playlists', params: { id: category.id }}">
                    {{ category.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import store from '../store';

    export default {
        created () {
            store.dispatch('receiveCategories');
        },
        computed: {
            categories () {
                return store.state.categories;
            }
        }
    }
</script>
