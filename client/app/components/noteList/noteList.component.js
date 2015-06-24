import './noteList.css';
import {NoteListController as controller} from './noteList.controller';
import template from './noteList.html';

let NoteListComponent = function() {
    return {
        restrict: 'E',
        scope: {},
        template,
        controller,
        bindToController: true,
        controllerAs: 'vm'
    }
};

export {NoteListComponent};