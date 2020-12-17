import React from 'react'

export function Pricing(){
    return <div className="bg-color-sky-light">
        <div className="content-lg container">
            <div className="row row-space-1">
                <div className="col-sm-4 sm-margin-b-2">
                    <div className="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".1s">
                        <div className="pricing">
                            <div className="margin-b-30">
                                <i className="pricing-icon icon-chemistry"></i>
                                <h3>Starter Kit <span> - $</span> 49</h3>
                                <p>Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                            </div>
                            <ul className="list-unstyled pricing-list margin-b-50">
                                <li className="pricing-list-item">Basic Features</li>
                                <li className="pricing-list-item">Up to 5 products</li>
                                <li className="pricing-list-item">50 Users Panels</li>
                            </ul>
                            <a href="pricing.html"
                               className="btn-theme btn-theme-sm btn-default-bg text-uppercase">Choose</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 sm-margin-b-2">
                    <div className="wow fadeInUp" data-wow-duration=".3" data-wow-delay=".2s">
                        <div className="pricing pricing-active">
                            <div className="margin-b-30">
                                <i className="pricing-icon icon-badge"></i>
                                <h3>Professional <span> - $</span> 149</h3>
                                <p>Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                            </div>
                            <ul className="list-unstyled pricing-list margin-b-50">
                                <li className="pricing-list-item">Basic Features</li>
                                <li className="pricing-list-item">Up to 100 products</li>
                                <li className="pricing-list-item">100 Users Panels</li>
                            </ul>
                            <a href="pricing.html"
                               className="btn-theme btn-theme-sm btn-default-bg text-uppercase">Choose</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="wow fadeInRight" data-wow-duration=".3" data-wow-delay=".1s">
                        <div className="pricing">
                            <div className="margin-b-30">
                                <i className="pricing-icon icon-shield"></i>
                                <h3>Advanced <span> - $</span> 249</h3>
                                <p>Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                            </div>
                            <ul className="list-unstyled pricing-list margin-b-50">
                                <li className="pricing-list-item">Extended Features</li>
                                <li className="pricing-list-item">Unlimited products</li>
                                <li className="pricing-list-item">Unlimited Users Panels</li>
                            </ul>
                            <a href="pricing.html"
                               className="btn-theme btn-theme-sm btn-default-bg text-uppercase">Choose</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}