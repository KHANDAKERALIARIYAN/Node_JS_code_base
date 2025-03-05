import { EventEmitter } from 'events';

const emitter = new EventEmitter();

function greetHandler(name){
    console.log("Hello World" + name);
}

function goodbyeHandler(name){
    console.log("Good Bye World" + name);
}

// Register event listeners
emitter.on('greet', greetHandler);
emitter.on('goodbye', goodbyeHandler);

// Emits events
emitter.emit('greet', 'Ariyan');
emitter.emit('goodbye', 'Ariyan');

// Error handling 
emitter.on('error', (err) => {
    console.log(err);
});

// Simulate error
emitter.emit('error', new Error('Something went wrong'));