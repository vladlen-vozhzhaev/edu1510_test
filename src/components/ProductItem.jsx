import React from 'react'

export class ProductItem extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="col-sm-4 sm-margin-b-50">
            <div className="margin-b-20">
                <div className="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                    <img className="img-responsive" src={this.props.img} alt="Latest Products Image"/>
                </div>
            </div>
            <h4><a href="#">{this.props.title}</a></h4>
            <p>{this.props.description}</p>
            <a className="link" href="#">Read More</a>
        </div>
    }
}