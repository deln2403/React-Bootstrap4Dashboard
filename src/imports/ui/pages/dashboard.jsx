import React, { Component } from 'react';

/* Components */
import Sidebar from '../components/nav/sidebar';
import SidebarButton from '../components/nav/sidebarButton';
import Alert from '../components/alert';
import Footer from '../components/footer';
import LargeModal from '../components/largeModal';

/* Layouts */
import CardsSimple from '../layouts/cardsSimple';
import CardsDeck from '../layouts/cardsDeck';
import CardsMasonry from '../layouts/cardsMasonry';
import ComboLayout from '../layouts/comboLayout';
import Circles from '../layouts/circles';
import VariousLayouts from '../layouts/variousLayouts';



export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
     <div> 

        <div className="container-fluid" id="main">
          <div className="row row-offcanvas row-offcanvas-left">
            <Sidebar />
            <div className="col-md-9 col-lg-10 main">

              <SidebarButton />
              <h1 className="display-1 hidden-xs-down">Bootstrap 4 Dashboard</h1>
              <p className="lead">(with off-canvas sidebar, based on BS v4 alpha)</p>

              <Alert />
              <CardsSimple />
              <hr />
              <Circles />

              <a id="features"></a>
              <hr />
              <p className="lead">
                Are you ready for Bootstap 4? It's the 4th generation of this popular responsive framework. Bootstrap 4 will include some interesting new features such as 5 grid sizes (now including xl), cards, `em` sizing, CSS normalization (reboot) and larger font sizes.
              </p>
              <hr />
              <ComboLayout />

              <a id="more"></a>
              <hr />
              <h2 className="sub-header">Use card decks for equal height rows of cards</h2>
              <CardsDeck />

              <a id="flexbox"></a>
              <hr />
              <h2>Masonry-style grid columns</h2>
              <h6>with Bootstrap 4 flexbox</h6>
              <CardsMasonry />

              <a id="layouts"></a>
              <hr />
              <h2 className="sub-header">Interesting layouts and elements</h2>
              <VariousLayouts />

            </div>
          </div>
        </div>

        <Footer />
        <LargeModal />
      </div>
    )
  }
}

