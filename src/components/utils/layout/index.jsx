import { withStyles } from '@material-ui/core/styles';
import { flowRight } from 'lodash/fp';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { lifecycle } from 'recompose';

import reducerAcces from '../../../actions/withReducerOnly/index';
import mongoAccess from '../../../actions/withApi/index';

import generateCheckTokenUrl from '../../../middleWare/generateCheckTokenUrl';
import getJwt from '../../../functions/getJwt';
import Layout from './layout';

const styles = (theme) => ({
    tableWrapper: {
        overflowX: 'auto',
        padding: theme.spacing(3),
        maxWidth: 1200,
        margin: '50px auto 0 auto',
    },
});

const Page = ({ currentPage, classes, children }) => (
    <div className="App">
        <Layout currentPage={currentPage} />
        <div className={classes.tableWrapper}>
            {children}
        </div>
    </div>
);

Page.propTypes = {
    classes: PropTypes.shape({
        tableWrapper: PropTypes.string,
    }).isRequired,
    children: PropTypes.node,
    currentPage: PropTypes.string,
    history: PropTypes.shape({
        push: PropTypes.func,
    }),
};

export default flowRight([
    withRouter,
    withStyles(styles),
    connect((state)=>({
        accountAddress: state.accountAddress,
    }), 
    {
        setAccountInfo: reducerAcces.SetAccountInfo,
        getOwnerEirbmon: mongoAccess.GetOwnerEirbmon,
        checkToken: mongoAccess.CheckToken,
    }),
    lifecycle({
        componentWillMount() {
            const jwt = getJwt();
            const { checkToken, history, getOwnerEirbmon, setAccountInfo } = this.props;
            const accountAddress = sessionStorage.getItem('accountAddress');
            if(!accountAddress.accountUrl){
                setAccountInfo(accountAddress);
                getOwnerEirbmon(accountAddress);
            }

            checkToken(generateCheckTokenUrl, { token: jwt })
                .then((res) => {
                    if (403 === res) {
                        history.push('/login');
                    }
                });
        },
    }),
])(Page);
