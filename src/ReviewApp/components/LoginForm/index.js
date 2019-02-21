import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const OuterDiv = styled.div`
  position: fixed;
  left: 0%;
  top:0%;
  width:100%;
  height: 100%;
  background: gray;
  opacity: 0.8;
  z-index:100
`;
const InnerDiv = styled.div`
  position: fixed;
  left:40%;
  top:40%;
  border:2px solid black;
  background: white;
  opacity: 1;
  z-index:900
`;
class LoginModalForm extends Component {
    constructor(props){
        super(props);
        this.containerDiv = document.createElement("div");
        document.body.appendChild(this.containerDiv);
        this.emailInp = React.createRef();
        this.passwordInp = React.createRef();
    }

    componentWillUnmount() {
        this.containerDiv.remove()
    }
    render () {
        const {SignIn, SignUp, hideModalForm} = this.props;
        return (
            ReactDOM.createPortal(
                <OuterDiv>
                    <InnerDiv>
                        {
                            <div>
                                <div>
                                    <label htmlFor="email">
                                        Email:
                                        <input id = 'email' type="email" ref = {this.emailInp}/>
                                    </label> <br/>
                                    <label htmlFor="password">
                                        Password:
                                        <input id = 'password' type="password" ref = {this.passwordInp}/>
                                    </label> <br/>
                                    <button onClick={()=>{SignIn(this.emailInp.current.value,
                                        this.passwordInp.current.value)}}>Увійти</button>
                                    <button onClick={()=>(SignUp(this.emailInp.current.value,
                                        this.passwordInp.current.value))}>Зараєструватися</button>
                                    <button onClick={hideModalForm}>Закрити</button>
                                </div>
                            </div> }
                    </InnerDiv>
                </OuterDiv>,
                this.containerDiv
            )
        )
    }
}
export default LoginModalForm