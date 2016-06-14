import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import classnames from 'classnames';

/* Components */
import Switch from '../components/switch';

export default class GridLayout extends Component {
  constructor(props) {
    super(props);
    this.toggleDisplayContent = this.toggleDisplayContent.bind(this);

    this.state = {
      displayContent: true,
    }
  }

  componentWillMount() {};
  componentDidMount() {};
  componentWillUpdate() {};
  componentDidUpdate() {};

  toggleDisplayContent() {
    this.setState({displayContent: !this.state.displayContent});
  }

  // RENDER
  render() {
    let inverseCard = {
      backgroundColor: '#333',
      borderColor: '#333'
    };

    return (
      <section>
        <a id="gridLayout"></a>
        <hr />
        <p className="lead">
        Are you ready for Bootstap 4? It's the 4th generation of this popular responsive framework. Bootstrap 4 will include some interesting new features such as 5 grid sizes (now including xl), cards, `em` sizing, CSS normalization (reboot) and larger font sizes.
         </p>

        <hr />
        <Switch 
          checked={this.state.displayContent}
          toggle={this.toggleDisplayContent}
        />
        <h2 className="sectionTitle">Grid Layout</h2>

        { this.state.displayContent ? (
        <div className="row">
          <div className="col-lg-3 col-md-4">

            <div className="card">
              <img className="card-img-top img-responsive" src="//placehold.it/740x180/bbb/fff?text=..." alt="Card image cap"/>
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Button</a>
              </div>
            </div>

            <div className="card card-inverse" style={inverseCard}>
              <div className="card-block">
                <h3 className="card-title">Dark background</h3>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-secondary-outline">Outline</a>
              </div>
            </div>
          </div>

          <div className="col-lg-9 col-md-8">
              <div className="table-responsive">
                  <table className="table table-striped">
                      <thead className="thead-inverse">
                          <tr>
                              <th>#</th>
                              <th>Label</th>
                              <th>Header</th>
                              <th>Column</th>
                              <th>Data</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>1,001</td>
                              <td>responsive</td>
                              <td>bootstrap</td>
                              <td>cards</td>
                              <td>grid</td>
                          </tr>
                          <tr>
                              <td>1,002</td>
                              <td>rwd</td>
                              <td>web designers</td>
                              <td>theme</td>
                              <td>responsive</td>
                          </tr>
                          <tr>
                              <td>1,003</td>
                              <td>free</td>
                              <td>open-source</td>
                              <td>download</td>
                              <td>template</td>
                          </tr>
                          <tr>
                              <td>1,003</td>
                              <td>frontend</td>
                              <td>developer</td>
                              <td>coding</td>
                              <td>card panel</td>
                          </tr>
                          <tr>
                              <td>1,004</td>
                              <td>migration</td>
                              <td>bootstrap 4</td>
                              <td>mobile-first</td>
                              <td>design</td>
                          </tr>
                          <tr>
                              <td>1,005</td>
                              <td>navbar</td>
                              <td>sticky</td>
                              <td>jumbtron</td>
                              <td>header</td>
                          </tr>
                          <tr>
                              <td>1,006</td>
                              <td>collapse</td>
                              <td>affix</td>
                              <td>submenu</td>
                              <td>footer</td>
                          </tr>
                          <tr>
                              <td>1,007</td>
                              <td>layout</td>
                              <td>examples</td>
                              <td>themes</td>
                              <td>grid</td>
                          </tr>
                          <tr>
                              <td>1,008</td>
                              <td>migration</td>
                              <td>bootstrap 4</td>
                              <td>flexbox</td>
                              <td>design</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
        </div>
        ) : '' }
      </section>
    );
  }
}  

