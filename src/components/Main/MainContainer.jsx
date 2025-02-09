import React from 'react';
import Main from "./Main";
import {connect} from "react-redux";
import {fetchCartData} from "../../redux/main-reducer";

class MainContainer extends React.Component {

    componentDidMount() {
    this.props.fetchCartData(this.props.cartData);
    }

    render() {
        return <Main {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        mainPage: state.mainPage.cartData,
        isLoading: state.mainPage.isLoading
    }
}

export default connect(mapStateToProps, {fetchCartData}) (MainContainer);
