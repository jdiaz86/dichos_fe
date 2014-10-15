function AppCtrl() {
  
}

function PlayListsCtrl() {
  this.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];  
}

function PlaylistCtrl($stateParams) {
  this.title = "title2";
}

angular.module('starter.controllers', [])

.controller('AppCtrl', AppCtrl )

.controller('PlaylistsCtrl', PlayListsCtrl)

.controller('PlaylistCtrl', PlaylistCtrl);
