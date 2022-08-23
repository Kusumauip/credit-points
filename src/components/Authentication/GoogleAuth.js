import React from 'react';
import {connect} from 'react-redux'
import {signIn,signOut} from '../../actions'
class GoogleAuth extends React.Component{
    
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'445155794874-fgvvgoudg295040mkrfrqqhsnieboio7.apps.googleusercontent.com',
                scope:'email',
                plugin_name:'streamy'
            }).then(()=>{
               this.auth=window.gapi.auth2.getAuthInstance()
               this.onAuthChange(this.auth.isSignedIn.get());
               this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange=(isSignedIn)=>{
        if(isSignedIn){
            return this.props.signIn(this.auth.currentUser.get().getBasicProfile().getName());
        }
        else{
            return this.props.signOut();
        }
    }

    onSignInClick=()=>{
       this.auth.signIn()
    }

    onSignOutClick=()=>{
        this.auth.signOut()
    }

    renderAuthStatus(){
        if(this.props.isSignedIn===null)
         return null
        else if(this.props.isSignedIn)
          return (
            
          <button className='ui red  button' 
           onClick={this.onSignOutClick}>
            SignOut
            </button>
            )
        else
          return( 
          <button className='ui green button' 
          onClick={this.onSignInClick}>
            SignIn
            </button>
            )
    }

    render(){
        return (
            <div >
            <div>{this.renderAuthStatus()}</div>
            </div>
        )
    }
}

const mapStatetoProps=(state)=>(
     {isSignedIn: state.authObject.isSignIn,
      userId: state.authObject.userId
    })


export default connect(mapStatetoProps,{signIn,signOut})(GoogleAuth)