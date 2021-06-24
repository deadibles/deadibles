import React, { Component, Fragment } from 'react';
import AppNavbar from './AppNavbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOrders } from '../actions/orderActions';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Alert, Container } from 'reactstrap';

class Orders extends Component {
    state = {
        loaded: false
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object.isRequired,
        order: PropTypes.object.isRequired,
        getOrders: PropTypes.func.isRequired,
    };

    ongetOrders = async ( id ) => {
        await this.props.getOrders( id );
        this.state.loaded = true;
    }

    render() {
        const user = this.props.user;
        if ( this.props.isAuthenticated && !this.props.order.loading && !this.state.loaded ) {
            this.ongetOrders( user._id );
        }

        return (
            <div>
                <AppNavbar />
                {this.props.isAuthenticated ? 
                    <Fragment>
                        {this.props.order.orders !== [] ? null :
                            <Alert color="info" className="text-center">You have no orders!</Alert>
                        }
                    </Fragment>
                    : <Alert color="danger" className="text-center">Login to view</Alert>
                }

                {this.props.isAuthenticated && !this.order.loading && this.state.loaded && this.props.order.orders.length ? 
                    <Container>
                        <div className="row">
                            
                        </div>
                    </Container>
                
                }
            </div>
        )
    }
}