import angular from 'angular';

import {HomeComponent} from './home.component';

// import {noteMakerModule} from '../../components';


// better structure for testing
let homeModule =  angular.module('home', [])
    .directive('home', HomeComponent);

export {homeModule};