<template>
    <div class="container">
        Guess!
    </div>
</template>

<script>
    import store from '../store';

    export default {
        created () {

        },
        computed: {
            songs () {
                return store.state.songs;
            }
        }
    }
</script>
