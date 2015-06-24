// with common js, paths are relative
// with jpsm, you must declare a root path.

//webpack uses common js
import {homeModule} from './home/home';
import {noteMakerModule} from './noteMaker/noteMaker';
import {noteListModule} from './noteList/noteList';
import {noteModule} from './note/note';

export {homeModule};
export {noteMakerModule};
export {noteListModule};
export {noteModule};

