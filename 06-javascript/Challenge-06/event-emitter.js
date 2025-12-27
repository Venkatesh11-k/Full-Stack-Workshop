function createEventEmitter() {
    const events = {};

    return {
        // Subscribe
        on(eventName, callback) {
            if (!events[eventName]) {
                events[eventName] = [];
            }

            events[eventName].push(callback);

            // Return unsubscribe function
            return () => {
                events[eventName] = events[eventName].filter(
                    cb => cb !== callback
                );
            };
        },

        // Subscribe once
        once(eventName, callback) {
            const wrapper = (...args) => {
                callback(...args);
                this.off(eventName, wrapper);
            };

            this.on(eventName, wrapper);
        },

        // Emit event
        emit(eventName, data) {
            if (!events[eventName]) return;

            events[eventName].forEach(callback => {
                callback(data);
            });
        },

        // Remove listeners
        off(eventName, callback) {
            if (!events[eventName]) return;

            // Remove all listeners
            if (!callback) {
                delete events[eventName];
            } else {
                events[eventName] = events[eventName].filter(
                    cb => cb !== callback
                );
            }
        }
    };
}
