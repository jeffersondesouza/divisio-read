import React, { Component } from 'react';
import { connect } from 'react-redux';

import UiMidleware from '../../store/modules/ui/middleware';

class BooksDetailsPage extends Component {

    handleToogleShowSidemenu = () => {
        this.props.dispatchToogleSidemenu();
    }


    render() {
        return (
            <div>
                BooksDetailsPage
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


const BooksDetailsPageContainer = connect(mapStateToProps, mapDispatchToProps)(BooksDetailsPage);

export default BooksDetailsPageContainer;