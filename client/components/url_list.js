import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { Links } from '../../imports/collections/links'

class UrlList extends Component {

    // constructor(props) {
    //     super(props)
    // }

    renderRows() {
        return this.props.links.map(link => {
          const { url, token, clicks } = link;
          const shortLink = `http://localhost:3000/${token}`;
    
          return (
            <tr key={token}>
              <td>{url}</td>
              <td>
                <a href={shortLink}>{shortLink}</a>
              </td>
              <td>
                {clicks}
              </td>
            </tr>
          )
        })
      }
    
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Source</th>
                        <th>Tiny Url</th>
                        <th>Clicked</th>
                    </tr>
                </thead>
                <tbody>
                    { this.renderRows() }
                </tbody>
            </table>
        )
    }
}

export default withTracker(() => {
    Meteor.subscribe('links')
    
    return { links: Links.find({}).fetch() }
})(UrlList)