
export class Events {
    constructor() {

        this.events = new Set();

        document.querySelectorAll(`[data-event]`).forEach(i => {
            i.dataset.event.split(',').forEach((event) => {
                let [eventType, eventName] = event.split('.');

                if (!this[eventName]) return;

                this.events.add(eventType);
            });
        });



        document.addEventListener("DOMContentLoaded", () => {
            this.init();
        });
    }

    init() {

        const body = document.querySelector("body");

        this.events.forEach((type) => {

            body.addEventListener(type, (e) => {
                const target = e.target.closest(`[data-event]`);
                if (!target) return;

                target.dataset.event.split(',').forEach((event) => {
                    let [eventType, eventName] = event.split('.');

                    if (type !== eventType || !this[eventName]) return;

                    this[eventName].call(this, e, target);
                });
            });
        });

    }

    openMenu(e, elem) {
        e.preventDefault();
        console.log('Open menu');
        // console.log(this);
        // console.log(e);
        // console.log(elem);
    }

    openForm(e, elem) {
        e.preventDefault();
        console.log('Open Form');
        // console.log(this);
        // console.log(e);
        // console.log(elem);
    }

    sendForm(e, elem) {
        e.preventDefault();
        console.log('Send form');
        // console.log(this);
        console.log(e);
        // console.log(elem);
    }

    inputChange(e, elem) {
        e.preventDefault();
        console.log('Change input');
        // console.log(this);
        console.log(e);
        // console.log(elem);
    }


}

