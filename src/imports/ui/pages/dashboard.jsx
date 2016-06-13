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
import GridLayout from '../layouts/gridLayout';
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
              <Circles />
              <GridLayout />
              <CardsDeck />
              <CardsMasonry />
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

