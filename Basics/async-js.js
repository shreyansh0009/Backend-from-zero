// Javascript is a single threaded language, meaning it can only do one thing at a time.

// Synchronous js: code runs in order, one line after another

// Asynchronous js: code can run in the background, allowing other code to run while waiting for a response, Async code is non-blocking and it moved on side stack from main stack. When the main stack is empty, the event loop will take the code from the side stack and put it in the main stack to be executed. This is how async code works in js.


// First main stack is executed, then side stack is executed. The event loop is responsible for moving the code from the side stack to the main stack when the main stack is empty. This allows JavaScript to perform non-blocking I/O operations, even though JavaScript is single-threaded.

async function fetchData() {

    var data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    var ans = await data.json();
    console.log(ans);
    
}

fetchData(); // calling the async function