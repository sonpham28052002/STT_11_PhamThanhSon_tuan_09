import {  signin,put } from "./actions";

var mapStateToProps = (state) => ({ account: state });
var mapDispatchToProps = (dispatch) => ({
  
  signin: (email) => {
    return dispatch(signin(email));
  },put:(account,job)=>{return dispatch(put(account,job))}
  
});

export { mapDispatchToProps, mapStateToProps };
