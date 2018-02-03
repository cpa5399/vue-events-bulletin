var instance = new Vue({
    el: '#events',
    data: {
        event: {
            name: 'Batman\'s Birthday Party',
            description: 'Come celebrate the best party of the year',
            date: ''
        },
        events: [],
        index: ''

    },
    created: function() {
        this.fetchEvents();
    },
    methods: {
        fetchEvents: function() {
            var events = [
                {
                    id: 1,
                    name: 'Batman\'s Anniversary',
                    description: 'When Batman became Batman',
                    date: '2015-09-10'
                },
                {
                    id: 2,
                    name: 'Batman\'s Movie Premier',
                    description: 'The only movie anyone will ever watch.',
                    date: '2015-10-02'
                },
                {
                    id: 3,
                    name: 'Batman\'s First Puppy',
                    description: 'Batman gets his first Batpuppy.',
                    date: '2016-03-11'
                }
            ];
            
            this.events.push(...events);
        },
        addEvent: function() {
            if (this.event.name) {
                this.events.push(this.event);
                this.event = { name: '', description: '', date: '' }
            }
        },
        deleteEvent: function(id) {
            let index = this.events.findIndex((event) => { return event.id == id });
            this.events.splice(index, 1);
        }
    }
});