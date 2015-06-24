import './note.css';
import {NoteController as controller} from './note.controller';
import template from './note.html';

let NoteComponent = function() {
    return {
        restrict: 'E',
        scope: {},
        template,
        controller,
        controllerAs: 'vm',
        bindToController: {
            note: '='
        }
    }
};

export {NoteComponent};