export default class Component {
    constructor (options) {
        for (option in options) {
            this[option] = options[option];
        }

    }

    show () {
        while (this.content.lastChild) {
            this.content.removeNode(this.content.lastChild);
        }

        this.content.appendChild(this.element);
    }
}
