import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'
import CreateLinkForm from './components/create_link_form'
import UrlList from './components/url_list';

import { Links } from '../imports/collections/links'

const App = () => {

    return (
        <div>
            <Header />
            <CreateLinkForm />
            <UrlList />
        </div>
    )
}

Meteor.startup( () => {
    ReactDOM.render(<App />, document.querySelector('.container'));
});