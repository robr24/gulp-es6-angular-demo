class NoteListService {
    constructor($http) {
        this.$http = $http;
        this.notes = [];
        this.count = 0;
    }

    getAllNotes() {
        // return this.notes;
        // let url = 'app/shared/data/notes.json';
        const url = 'http://localhost:3000/notes';
        return this.$http.get(url).then(resp => {
            this.notes = resp.data;
        });
    }

    getOneNote(id) {
        // return notes.find()
    }

    getState() {
        return this.notes;
    }

    createNote(content) {
        if (!content) return;

        let note = {
            content,
            id: ++this.count
        };
        this.notes.push(note);
    }

};


NoteListService.$inject = ['$http'];


export {NoteListService};