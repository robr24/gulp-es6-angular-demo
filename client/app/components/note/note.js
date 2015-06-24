import angular from 'angular';

import {NoteComponent} from './note.component';

let noteModule = angular.module('noteModule', [])
    .directive('note', NoteComponent);


export {noteModule};