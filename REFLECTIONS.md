# cs2910-HW9 REFLECTION

### SECURITY VULNERABILITIES
If no sanitization is performed on the input provided by clients, the risk for XSS attacks becomes apparent. Since client input gets relayed to all other clients that are connected to the server at that point, a malicious actor could input HTML or JS with the intent of causing code execution on the browsers of the other clients. In the case of this implementation, the messages sent by clients are interpreted as plain text that does not allow HTML and JS contents to be executed.

Another vulnerability that I could find was that the server for Q3 does not perform any kind of validation to ensure that a user is not posing as another user. You can change the username that you provide to the server when you send a message whenever you like, allowing you to easily pose as another user in the chat server.

### WHAT I LEARNED (https://javascript.info/websocket)
I learned that web sockets provide a means for clients and servers to maintain a connection with one-another without needing to repeatedly transmit information to each other at set intervals to keep the connection alive. Instead, they keep a connection open and take a reactive approach to network communications, acting when events occur.

When it comes to JS, the clients and servers have a pretty simple mechanism to interact with each other. They send and receive messages that can be encoded as text or binary for better flexibility.

While the implementation of web sockets has a lot of helpful abstractions to make it easier to work with them in code, the base implementation is missing some potentially desirable features that require wither manual implementation or the integration of external libraries (which could introduce dependency-related vulnerabilities) to use.