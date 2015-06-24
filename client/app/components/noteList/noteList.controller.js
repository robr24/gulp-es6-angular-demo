
class NoteListController {
    constructor($rootScope, NoteListService) {
        this.$rootScope = $rootScope;
        this.noteService = NoteListService;
        this.getAllNotes();
    }

    addNote(content) {
        this.noteService.createNote(content);
    }

    getOneNote(id) {
        return this.noteService.getOneNote(id);
    }

    getAllNotes() {
        return this.noteService.getAllNotes().then(resp => {
            this.notes = this.noteService.getState();
        });
    }

}

NoteListController.$inject = ['$rootScope', 'NoteListService'];

export {NoteListController};