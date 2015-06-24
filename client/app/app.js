import 'normalize.css';

import angular from 'angular';

import {homeModule} from './components/components';
import {noteMakerModule} from './components/components';
import {noteListModule} from './components/components';
import {noteModule} from './components/components';

import {NoteListService} from './shared/services/noteList.service';


// you can map to the name property
angular.module('app', [
    homeModule.name,
    noteMakerModule.name,
    noteListModule.name,
    noteModule.name
])
    .service('NoteListService', NoteListService);
