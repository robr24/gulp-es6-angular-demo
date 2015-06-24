class NoteMakerController {

    constructor($rootScope, NoteListService) {
        this.$rootScope = $rootScope;
        this.noteListService = NoteListService;
        this.inputContent = null;
    }

    addNote() {
        this.noteListService.createNote(this.inputContent);
        this.inputContent = '';
    }
}

NoteMakerController.$inject = ['$rootScope', 'NoteListService'];

export {NoteMakerController};