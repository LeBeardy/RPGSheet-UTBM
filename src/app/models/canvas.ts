import {serialize} from 'cerialize';

export class Canvas {
    @serialize title = 'untitledModel';
    @serialize canvas: any[] = [];

    addElement(compo: any) {
        this.canvas.push(compo);
    }

    length() {
        return this.canvas.length;
    }
}
