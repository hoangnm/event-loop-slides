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
