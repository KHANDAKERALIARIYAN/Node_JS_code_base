console.log(process);

// process.argv
console.log(process.argv);
console.log(process.argv[3]);

// process.env
console.log(process.env);
console.log(process.env.USERNAME);

// pid 
console.log(process.pid);

// cwd
console.log(process.cwd());

// title
console.log(process.title);

// memory usage()
console.log(process.memoryUsage());

// update()
console.log(process.uptime());

process.on('exit', (code) => {
    console.log('Process is about to exit: ${code}');
});

// exit()
process.exit();

console.log('hello world');