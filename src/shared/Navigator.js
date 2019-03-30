const state = { foo: 'bar' };

// just push routes like this 'route/params/params'
export default class RouteNavigator {
    constructor () {
        this._history = [];
        this._present = ['login'];
    }

    get present () {
        return this._present;
    }

    get _previous () {
        if (this._history.length > 0) {
            return this._history[this._history.length - 1];
        }
    }

    isPrevious (route) {
        const r = this.makeRoute(route);
        return r.join('') === this.previous.join('');
    }

    makeRoute (route) {
        const params = route.replace('https://andrewcraft.nyc');
        return params.split('/');
    }

    stepBack (num = 1) {

        if (this._history.length < num) num = this.history.length;

        for (let i = 0; i < num; i++) {
            this._present = this._history.pop();
        }

    }

    navigate (route) {

        const r = this.makeRoute(route);

        if (r === this._present) return;

        window.history.pushState(state, this._present);

        this._history.push(this._present);
        this._present = r;

        const hLength = this._history.length;

        if (hLength > 10) {
            this._history = this._history.slice(hLength - 10);
        }

    }

}
