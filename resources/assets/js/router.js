import VueRouter from 'vue-router';
import ChooseCategory from './components/ChooseCategory';
import ChoosePlaylist from './components/ChoosePlaylist';
import Guess from './components/Guess';

const routes = [
    { name: 'categories', path: '/', component: ChooseCategory },
    { name: 'playlists', path: '/playlist/:id', component: ChoosePlaylist },
    { name: 'guess', path: '/guess/:id', component: Guess }
];

export default new VueRouter({
    routes
});