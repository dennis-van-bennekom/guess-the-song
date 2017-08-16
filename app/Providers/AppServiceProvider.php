<?php

namespace App\Providers;

use App\Http\Controllers\SpotifyController;
use SpotifyWebAPI;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $session = new SpotifyWebAPI\Session(
            config('services.spotify.id'),
            config('services.spotify.secret')
        );

        $api = new SpotifyWebAPI\SpotifyWebAPI();

        $session->requestCredentialsToken();
        $accessToken = $session->getAccessToken();

        $api->setAccessToken($accessToken);
        $api->setReturnType(SpotifyWebAPI\SpotifyWebAPI::RETURN_ASSOC);

        $this->app->singleton(SpotifyController::class, function () use ($api) {
            return new SpotifyController($api);
        });
    }
}
