<?php

namespace App\Http\Controllers;

class SpotifyController extends Controller
{
    protected $api;

    public function __construct($api)
    {
        $this->api = $api;
    }

    public function getCategories() {
        $response = $this->api->getCategoriesList();

        $categories = $response['categories']['items'];

        return array_map(function ($category) {
            return [
                'id' => $category['id'],
                'name' => $category['name'],
                'image' => $category['icons'][0]['url']
            ];
        }, $categories);
    }

    public function getPlaylists($id) {
        $response = $this->api->getCategoryPlaylists($id, [
            'limit' => 10
        ]);

        $playlists = $response['playlists']['items'];

        return array_map(function ($playlist) {
            return array_only($playlist, ['id', 'name', 'owner', 'images']);
        }, $playlists);
    }

    public function getSongs($userId, $playlistId) {
        $response = $this->api->getUserPlaylistTracks($userId, $playlistId);

        $tracks = $response['items'];

        $tracks = array_filter($tracks, function ($track) {
            return $track['track']['preview_url'];
        });

        return array_map(function ($track) {
            $track = $track['track'];

            return [
                'id' => $track['id'],
                'name' => $track['name'],
                'artist_name' => $track['artists'][0]['name'],
                'album_name' => $track['album']['name'],
                'album_image' => $track['album']['images'][0]['url'],
                'url' => $track['preview_url']
            ];
        }, $tracks);
    }
}
