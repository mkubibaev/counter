import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Counter.css';
import {addCounter, decrementCounter, fetchCounter, incrementCounter, subtractCounter} from "../../store/actions";
import Spinner from "../../components/UI/Spinner/Spinner";

class Counter extends Component {
    componentDidMount() {
        this.props.fetchCounter();
    }

    render() {
        return (
            <div className="Counter">
                <h1>{this.props.loading ? <Spinner/> : this.props.ctr}</h1>
                <button onClick={this.props.increaseCounter}>Increase</button>
                <button onClick={this.props.decreaseCounter}>Decrease</button>
                <button onClick={this.props.addCounter}>Increase by 5</button>
                <button onClick={this.props.subtractCounter}>Decrease by 5</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        loading: state.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        increaseCounter: () => dispatch(incrementCounter()),
        decreaseCounter: () => dispatch(decrementCounter()),
        addCounter: () => dispatch(addCounter(5)),
        subtractCounter: () => dispatch(subtractCounter(5)),
        fetchCounter: () => dispatch(fetchCounter())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);