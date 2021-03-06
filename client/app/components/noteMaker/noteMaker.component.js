import './noteMaker.css';
import {NoteMakerController as controller} from './noteMaker.controller';
import template from './noteMaker.html';

let NoteMakerComponent = function() {
    return {
        restrict: 'E',
        scope: {},
        template,
        controller,
        controllerAs: 'vm'
    }
};

export {NoteMakerComponent};