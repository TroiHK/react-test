import React, { Component } from 'react';

export default class Nav extends Component {
    constructor() {
        super()
        this.state = {
            collapsed: true,
            collapsedDropdown: false,
        };
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    render() {
        const { collapsed } = this.state;
        const navClass = collapsed ? "collapse" : "";

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">DemoApp</a>
                    <button className="navbar-toggler" type="button" onClick={this.toggleCollapse.bind(this)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="/">Blog</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value=""/>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}
