import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import MaterialUICollapseMenu from 'material-ui-collapse-menu'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          "id": 1,
          "title": "",
          "items": [
            {
              "id": "dashboard",
              "icon": "dashboard",
              "name": "Dashboard",
              "link": "/dashboard"
            }
          ]
        },
        {
          "id": 2,
          "title": "",
          "items": [
            {
              "id": "catalog",
              "icon": "",
              "name": "Catalog",
              "subitems": [
                {
                  "id": "article",
                  "icon": "star",
                  "name": "Articles List",
                  "link": "/article"
                },
                {
                  "id": "article",
                  "icon": "",
                  "name": "Articles",
                  "subitems": [
                    {
                      "id": "articles-form",
                      "icon": "add_circle",
                      "name": "Articles Form",
                      "link": "/article/form/new"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }

  render() {
    const { items } = this.state
    return (
      <Router basename='/app'>
        <MaterialUICollapseMenu items={items} />
      </Router>
    )
  }
}

render(<App />, document.getElementById('root'));
