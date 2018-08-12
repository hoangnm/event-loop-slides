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
---
Why should we know it ?

Ok, it's great, but why should we know it ? I can code the app without knowing too much about it.

-> For our app which needs real time data and has a lot of user's interactions, knowing this will help us understand and avoid the regular bugs in React app:
```
Warning: setState(…): Can only update a mounted or mounting component. This usually means you called setState() on an unmounted component.
```
or the wrong real time data being setState in component like OrderBook component.
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
        this.unsubscribe = subscribe(productId, this.onSubscribe);
      })
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