import React, { Component } from 'react';

import Imagetop from './Imagetop';

import '../css/Top.css';

class Top extends Component {
  render() {
    return  (
    	<div className="container-top">
	    	<div className="top">
	    		<Imagetop />
	        </div>
	    </div>
    );
  }
}

export default Top;