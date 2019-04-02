import React from 'react';
import './index.less'
class Index extends React.Component{
    createBody(){
        return(
            <div>
                <div onClick={()=> {this.run()}}>
                    哈哈哈哈
                </div>
                <div className="lxy">啊</div>
                <div className="lxy1">啊</div>
                <div className="lxy2">啊</div>
            </div>

        )
    }
    createFooter(){
        return(
            <div>
                <div>
                    底部
                </div>
            </div>
        )
    }

    render(){
        return(
            <div id="index-warp">
                {this.createBody()}
                {this.createFooter()}
            </div>
        )
    }
}
export default Index