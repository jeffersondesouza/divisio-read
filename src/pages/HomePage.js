import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/layout/Header/index';
import UiMidleware from '../store/modules/ui/middleware';

class HomePage extends Component {

    handleToogleShowSidemenu = () => {
        this.props.dispatchToogleSidemenu();
    }

    render() {
        return (
            <div>
                <Header onToogleShowSidemenu={this.handleToogleShowSidemenu} />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    showSidbarMenu: state.ui.showSidbarMenu
});

const mapDispatchToProps = dispatch => ({
    dispatchToogleSidemenu: () => dispatch(UiMidleware.toogleSideMenuVisibility())
});


const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageContainer;