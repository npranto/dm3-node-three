angular.module( `nodeThree`, [ `ui.router` ] )

.constant(`url`, {
	baseUrl: `http://localhost:8080`
})

.config( function( $stateProvider, $urlRouterProvider ) {
	$stateProvider
		.state( `home`, {
			url: `/`,
			templateUrl: `src/home/home.html`,
			controller: `homeCtrl`
		} )
		.state( `profile`, {
			url: `/profile`,
			templateUrl: `src/profile/profile.html`
		} );

	$urlRouterProvider.otherwise( `/` );
} );