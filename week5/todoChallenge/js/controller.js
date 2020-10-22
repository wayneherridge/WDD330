(function(window) {
    function Controller() {
        //controller is communicator between view and model
        this.addTemplate = function(val) {
            var dataObj = { value: val, isDone: false };
            TODO.model.addTodo(dataObj);
            TODO.view.renderView('add', dataObj);
        };

        this.changeTodoStatus = function(data) {
            TODO.model.updateTodo(data.index, data.isDone)
        };

        this.removeCompletedTodo = function() {
            TODO.model.removeCompletedTodo();
            TODO.view.renderView('clear');
        };

        this.handleHash = function() {
            var hashValue = location.hash.split('#')[1];

            if (hashValue === 'all' || hashValue === 'completed')
                TODO.view.renderView('hash', hashValue);
        };

        TODO.eventBus.subscribe("removeCompleted", this.removeCompletedTodo);
        TODO.eventBus.subscribe("toggleTodo", this.changeTodoStatus);
        TODO.eventBus.subscribe("addTemplate", this.addTemplate);
    }

    window.TODO = window.TODO || {};
    window.TODO.controller = new Controller();
})(window);