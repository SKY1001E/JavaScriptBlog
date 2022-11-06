import {Component} from "../core/component";

export class NavigationComponent extends Component {
    constructor(id) {
        super(id);

        this.tabs =[]
    }

    init() {
        this.$el.addEventListener('click', tabClickHandler.bind(this))
    }

    registerTabs(tabs) {
        this.tabs = tabs
    }
}

function tabClickHandler(event) {
    if(event.target.classList.contains('tab')){
        Array.from(this.$el.querySelectorAll('.tab'))
            .map(tab => tab.classList.remove('active'))

        event.target.classList.add('active')

        this.tabs.map(t => t.component.hide())

        const activeTab = this.tabs.find(t => t.name === event.target.dataset.name)
        activeTab.component.show()
    }
}