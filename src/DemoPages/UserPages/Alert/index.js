import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFrown} from "@fortawesome/free-solid-svg-icons";

const AlertKu = (props) => {
    return (
        <div class={`row-alert ${props.isAlert? 'muncul' : ''}`}>
            <div class="row-alert-content">
                <div class="row-alert-content-emot">
                    <FontAwesomeIcon className="fa-frown"/>
                    {/*<i class="fa fa-frown"></i>*/}
                </div>
                <div class="row-alert-content-massage">
                    <div>{props.alertMessage}</div>
                </div>
            </div>
        </div>
    )
}

export default AlertKu