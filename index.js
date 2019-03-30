import RouteNavigator from './shared/Navigator.js';
import constructors from './shared/constructors.js';

class App {
    constructor () {
        this.body = document.querySelector('body');
        this.content = document.querySelector('.main-content');
        this.headerTarget = document.querySelector('.header-target');

        this.navigator = new RouteNavigator();

        // override onpopstate to use SPA router
        const window_onpopstate = window.onpopstate.bind({});
        window.onpopstate = e => {
            if (e.state.foo) {
                if (this.navigator.isPrevious(document.location)) {
                    this.navigator.stepBack();
                }
                else this.navigator.navigate(document.location);
            }
            else window_onpopstate();
        }

        this.init();
    }

    init () {
        // instantiate all constructors
        const options = {
            navigator: this.navigator,
            content: this.mainContent,
        };

        constructors.forEach(c => {
            this[c.name] = new c(options);
        });
    }

    render () {

    }


}
