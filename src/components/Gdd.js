import React from 'react';
import { Link } from 'react-router-dom';
import '../css/gdd.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

const Gdd = () => {
  return(
    <div className="container button-card">
      <FontAwesomeIcon icon={faBookOpen} className="book"/>
      <a className="btn btn-light btn-lg" href="/GDD.pdf" target="_blank">
        <div className="download">Download our GDD</div>
      </a>
    </div>
  )
}

export default Gdd;
