import classNames from 'classnames';
import { flowRight } from 'lodash/fp';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import choisirImage from './choisirImage';

import mongoAccess from '../../../actions/withApi/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const styles = () => ({
    card: {
        width: 150,
        border: '1px solid #efefef',
        borderRadius: '4px',
        '&:hover, &:focus': {
            border: 'solid 1px',
        },
        paddingLeft: '15px',
        paddingRight: '15px',
    },
    media: {
        margin: '20 20 20 20',
        height: 140,
    },

    level: {
        margin: '10 10 0 0',
    },
    item: {
        marginBottom: '10px',
    },
    selected: {
        border: 'solid 1px',
    },
});

const EirbmonItem = ({ name, level, onClick, classes, isSelected, id }) => {

    function onEvolve(id_eirbmon) {

        console.log("L'ID du Eirbmon a évolué est : ");
    
        dispatch(mongoAccess.GetEvolution(id_eirbmon)).then(
            (eirbdex) => {
                console.log(eirbdex);
                if (eirbdex.evolution == "0") {
                    console.log('The eirbmon is already at its max evolution, there is no evolution above, it cannnot evolve.');
                    return;
                }
                if (eirbdex.lvl < 100) {
                    console.log('The eirbmon is not lv100, you cannnot evolve it');
                    return;
                }
                else {
                    console.log('New eirbmon type : ' + eirbdex.evolution);
                    this.state.contract.methods.evolveEirbmon(id_eirbmon, eirbdex.evolution).send({ from: this.state.owner_id })
                        .then(response => {
                            dispatch(mongoAccess.UpdateMongoEirbmonFromBlockchain(id_eirbmon)).then(
                                (initEirb) => { console.log("Eirbmon evolution :"); console.log(initEirb); },
                                (err) => { console.error(err); }
                            );
                        });
                }
            },
            (err) => { console.error(err); }
        );
    }

    const levelTitle = `Niveau ${level}`;
    var monImage = choisirImage(name)

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classNames('col-md-3', classes.item)}
        >
            <ButtonBase
                centerRipple
                onClick={onClick}
            >
                <Card className={classNames(classes.card, { [classes.selected]: isSelected })}>

                    <Typography component="p" align="right" className={classes.level}>
                        {levelTitle}
                    </Typography>
                    <CardMedia
                        className={classes.media}
                        image={monImage}
                        title={name}
                    />
                    <Typography component="h1" align="center">
                        {name}
                    </Typography>
                </Card>
            </ButtonBase>
            {level == 100 && <Button variant="contained" color="primary" onClick={() => onEvolve(id).then()}>
                        Évoluer
             </Button>}
        </Grid>
    );
};

EirbmonItem.propTypes = {
    name: PropTypes.string,
    level: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onClick: PropTypes.func,
    isSelected: PropTypes.bool,
    classes: PropTypes.shape({
        item: PropTypes.string,
        card: PropTypes.string,
        media: PropTypes.string,
        level: PropTypes.string,
        selected: PropTypes.string,
    }).isRequired,
    id: PropTypes.string,
};


export default flowRight([
    withRouter,
    connect(null, null),
    withStyles(styles),
])(EirbmonItem);
