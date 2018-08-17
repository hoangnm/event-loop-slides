# Event Loop
---
### Menu
- What is event loop ?
- Why ~~should~~ must we know event loop ?
---
### What is event loop ?
Event loop is what allow js application to work with asynchronous operations (setTimeout, AJAX, ...).

Browser under the hood has:
+ Call stack.
+ Event loop & event (or callback) queue.
+ Js Heap.
+ Web APIs.
---
![eventLoop](images/event_loop.png)
---
![callStack](images/call_stack.gif)
---
### Async operations
![eventLoop](images/event_loop.gif)
---
### Async operations
When call stack has function that uses web apis with callback, it registers callback to the web api and moves to the next function.

Then the api will send callback to callback queue if something happens.

When the **stack is empty**, event loop moves the callback from callback queue to stack.
---
[Example](http://latentflip.com/loupe/?code=ZnVuY3Rpb24gcHJpbnRIZWxsbygpIHsNCiAgICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBiYXonKTsNCn0NCg0KZnVuY3Rpb24gYmF6KCkgew0KICAgIHNldFRpbWVvdXQocHJpbnRIZWxsbywgMTAwMCk7DQogICAgY29uc29sZS5sb2coJ2RvbmUnKTsNCn0NCg0KZnVuY3Rpb24gZm9vKCkgew0KICAgIGJheigpOw0KfQ0KDQpmb28oKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)
---
### Why  ~~should~~ must we know event loop ?

For app that needs real time data and has a lot of user's interactions, knowing event-loop will help us understand and avoid regular bugs:
+ Warning: setState(…): Can only update a mounted or mounting component. This usually means you called setState() on an unmounted component.
+ The wrong data being used.
+ Memory leaks.
---
```
class OrderBook extends Component {
  componentDidMount() {
    this.subscribe();
  }
  subscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    getOrderBook(this.props.productId)
      .then((data) => {
        this.setState({
          orderBookData: data,
        });
        subscribe(this.props.productId, this.onSubscribe)
          .then((unsubscribe) => {
            this.unsubscribe = unsubscribe;
          });
      });
  }
  onSubscribe(data) {
    this.setState({
      orderBookData: data,
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.productId !== this.props.productId) {
      this.subscribe();
    }
  }
  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
}
```
---
### Solution
https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
---
### References
+ https://www.youtube.com/watch?v=8aGhZQkoFbQ
+ https://itnext.io/how-javascript-works-in-browser-and-node-ab7d0d09ac2f