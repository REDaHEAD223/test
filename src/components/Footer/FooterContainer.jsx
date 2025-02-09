import React from 'react';
import Footer from "./Footer";
import {connect} from "react-redux";

class FooterContainer extends React.Component {

    render() {
        return <Footer {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps) (FooterContainer);
