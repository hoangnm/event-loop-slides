# Event Loop
---
### Menu
- What is event loop ?
- Why should we know ?
---
### What is event loop ?
Event loop is what allow js application to work with asynchronous operations.
Browser under the hood has:
+ Call stack.
+ Event loop & event queue.
+ Js Heap.
+ Web APIs.
---
![eventLoop](images/event_loop.png)
---
![callStack](images/call_stack.gif)
---
How about async operations, how does it work ?
[Example](http://latentflip.com/loupe/?code=ZnVuY3Rpb24gcHJpbnRIZWxsbygpIHsNCiAgICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBiYXonKTsNCn0NCg0KZnVuY3Rpb24gYmF6KCkgew0KICAgIHNldFRpbWVvdXQocHJpbnRIZWxsbywgMTAwMCk7DQogICAgY29uc29sZS5sb2coJ2RvbmUnKTsNCn0NCg0KZnVuY3Rpb24gZm9vKCkgew0KICAgIGJheigpOw0KfQ0KDQpmb28oKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)