/**
 * Created by kyn on 19/3/22.
 */

import * as React from 'react';
import {HashRouter ,Switch,Route} from 'react-router-dom';
import Index from '../index/index.jsx';

class MainRouter extends React.Component {
    render() {
        return (
            <HashRouter >
             <Switch>        {/*只渲染第一个匹配到的<路由组件>或<重定向组件>*/}
                <Route exact={true} path="/" component={Index} />
             </Switch>
            </HashRouter>
        );
    }
}
export default MainRouter;