import React, {Fragment} from 'react';
import MegaMenuFooter from './Components/FooterMegaMenu';
import FooterDots from './Components/FooterDots';

class AppFooter extends React.Component {
    render() {


        return (
            <Fragment>
                <div className="app-footer">
                    <div className="app-footer__inner">
                        {/*<div className="app-footer-left">*/}
                        {/*    <FooterDots/>*/}
                        {/*</div>*/}
                        {/*<div className="app-footer-right">*/}
                        {/*    <MegaMenuFooter/>*/}
                        {/*</div>*/}
                        <div className="app-wrapper-footer">
                            <p> Copyright &copy; Daily You 2021 </p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )}
}

export default AppFooter;