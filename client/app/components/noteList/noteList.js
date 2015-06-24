import angular from 'angular';

import {NoteListComponent} from './noteList.component';

let noteListModule = angular.module('noteListModule', [])
    .directive('noteList', NoteListComponent);

export {noteListModule};