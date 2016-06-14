import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import classnames from 'classnames';

/* Collections */
import { AlertTypes, MasonCards } from '../../api/collections';

/* Components */
import Switch from '../components/switch';

export default class CardsMasonry extends Component {
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

  getCardTypes() {
    return [
      ['image','title','text','footer'],
      ['title','text','footer'],
      ['color','text','footer'],
      ['text','footer'],
      ['image']
    ];
  }


  // RENDER
  render() {
    console.log(this.getCardTypes());
    return (
      <section>
        <a id="masonryStyle"></a>
        <hr />
        <Switch
          checked={this.state.displayContent}
          toggle={this.toggleDisplayContent}
        />
        <h2 className="sectionTitle">Masonry-style grid columns</h2>
    
        { this.state.displayContent ? (
        <div>        
          <h4>with Bootstrap 4 flexbox</h4>

          <div className="card-columns">
            <div className="card">
              <img className="card-img-top img-responsive" src="//placehold.it/600x200/444/fff?text=..." alt="Card image cap"/>
              <div className="card-block">
                <h4 className="card-title">Card title that wraps to a new line</h4>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
            <div className="card card-block">
              <blockquote className="card-blockquote">
              <p>Bootstrap 4 will be lighter and easier to customize.</p>
              <footer>
                         <small className="text-muted">
                           Someone famous like <cite title="Source Title">Mark Otto</cite>
                         </small>
                     </footer>
                 </blockquote>
             </div>
             <div className="card">
                 <img className="card-img-top img-responsive" src="//placehold.it/600x200/bbb/fff?text=..." alt="Card image cap"/>
                 <div className="card-block">
                     <h4 className="card-title">Card title</h4>
                     <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                     <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                 </div>
             </div>
             <div className="card card-block card-inverse card-primary text-center">
                 <blockquote className="card-blockquote">
                     <p>Create masonry or Pinterest-style card layouts in Bootstrap 4.</p>
                     <footer>
                         <small>
                           Someone famous in <cite title="Source Title">Bootstrap</cite>
                         </small>
                     </footer>
                 </blockquote>
             </div>
             <div className="card card-block text-center">
                 <h4 className="card-title">Clever heading</h4>
                 <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                 <p className="card-text"><small className="text-muted">Last updated 5 mins ago</small></p>
             </div>
             <div className="card">
                 <img className="card-img img-responsive" src="//placehold.it/600x200/777/fff?text=..." alt="Card image"/>
             </div>
             <div className="card card-block text-right">
                 <blockquote className="card-blockquote">
                     <p>There are also some interesting new text classes to uppercase or capitalize.</p>
                     <footer>
                         <small className="text-muted">
                           Someone famous in <cite title="Source Title">Bootstrap</cite>
                         </small>
                     </footer>
                 </blockquote>
             </div>
             <div className="card card-block">
                 <h4 className="card-title">Responsive</h4>
                 <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                 <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
             </div>
             <div className="card">
                 <div className="card-block">
                     <ul className="list-unstyled">
                         <li className="text-capitalize"><code className="text-lowercase">text-capitalize</code> Capitalize each word</li>
                         <li className="text-uppercase"><code className="text-lowercase">text-uppercase</code> Uppercase text</li>
                         <li className="text-success"><code>text-success</code> Contextual colors for text</li>
                         <li><code>text-muted</code> <span className="text-muted">Lighten with muted</span></li>
                         <li><code>text-info</code> <span className="text-muted">Info text color</span></li>
                         <li><code>text-danger</code> <span className="text-muted">Danger text color</span></li>
                         <li><code>text-warning</code> <span className="text-muted">Warning text color</span></li>
                         <li><code>text-primary</code> <span className="text-primary">Primary text color</span></li>
                     </ul>
                 </div>
             </div>
             <div className="card card-block">
                 <h4 className="card-title">Heading</h4>
                 <p className="card-text">So now that you've seen some of what Bootstrap 4 has to offer, are you going to give it a try?</p>
                 <p className="card-text"><small className="text-muted">Last updated 12 mins ago</small></p>
             </div>
         </div>
       </div>
      ) : '' }
      </section>
    );
  }
}  

