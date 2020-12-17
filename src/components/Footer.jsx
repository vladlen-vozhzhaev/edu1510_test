import React from 'react'

export class Footer extends React.Component{
    constructor() {
        super();
        this.state={}
        this.handleChange = this.handleChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }
    handleChange(event){
        const target = event.target;
        const name = target.name;
        const value =  target.value;
        this.setState({
            [name]: value
        });
        console.log(name,value);
    }

    sendMessage(event){
        let formData = new FormData();
        formData.append("name",this.state.name);
        formData.append("email",this.state.email);
        formData.append("message",this.state.message);
        formData.append("phone",this.state.phone);
        fetch("http://1510.vozhzhaev.ru/php/sendMail.php",{
            method: "POST",
            body: formData,
            mode: 'no-cors',
        }).then(response=>response.text()).then(result=>console.log(result))
        event.preventDefault();
    }

    render() {
        return <footer className="footer">
            <div className="footer-seperator">
                <div className="content-lg container">
                    <div className="row">
                        <div className="col-sm-2 sm-margin-b-50">
                            <ul className="list-unstyled footer-list">
                                <li className="footer-list-item"><a className="footer-list-link" href="#">Home</a></li>
                                <li className="footer-list-item"><a className="footer-list-link" href="#">About</a></li>
                                <li className="footer-list-item"><a className="footer-list-link" href="#">Products</a></li>
                                <li className="footer-list-item"><a className="footer-list-link" href="#">Pricing</a></li>
                                <li className="footer-list-item"><a className="footer-list-link" href="#">Clients</a></li>
                                <li className="footer-list-item"><a className="footer-list-link" href="#">Careers</a></li>
                                <li className="footer-list-item"><a className="footer-list-link" href="#">Contact</a></li>
                                <li className="footer-list-item"><a className="footer-list-link" href="#">Terms</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 sm-margin-b-30">
                            <ul className="list-unstyled footer-list">
                                <li className="footer-list-item"><a className="footer-list-link" href="#">Twitter</a></li>
                                <li className="footer-list-item"><a className="footer-list-link" href="#">Facebook</a></li>
                                <li className="footer-list-item"><a className="footer-list-link" href="#">Instagram</a></li>
                                <li className="footer-list-item"><a className="footer-list-link" href="#">YouTube</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-5 sm-margin-b-30">
                            <h2 className="color-white">Send Us A Note</h2>
                            <form onSubmit={this.sendMessage}>
                                <input name="name" value={this.state.name} onChange={this.handleChange} type="text" className="form-control footer-input margin-b-20" placeholder="Name"
                                       required/>
                                <input name="email" value={this.state.email} onChange={this.handleChange} type="email" className="form-control footer-input margin-b-20" placeholder="Email"
                                       required/>
                                <input name="phone" value={this.state.phone} onChange={this.handleChange}type="text" className="form-control footer-input margin-b-20" placeholder="Phone"
                                       required/>
                                <textarea name="message" value={this.state.message} onChange={this.handleChange} className="form-control footer-input margin-b-30" rows="6"
                                          placeholder="Message" required></textarea>
                                <input type="submit"
                                       className="btn-theme btn-theme-sm btn-base-bg text-uppercase"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content container">
                <div className="row">
                    <div className="col-xs-6">
                        <img className="footer-logo" src="/img/logo.png" alt="Asentus Logo"/>
                    </div>
                    <div className="col-xs-6 text-right">
                        <p className="margin-b-0"><a className="color-base fweight-700"
                                                     href="http://keenthemes.com/preview/asentus/">Asentus</a> Theme Powered
                            by: <a className="color-base fweight-700" href="http://www.keenthemes.com/">KeenThemes.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    }
}