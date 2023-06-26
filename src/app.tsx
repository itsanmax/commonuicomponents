/**
 * @author: sandeep.guddu@gmail.com
 * @desc: Denmark UI components: app
 */

 import React from 'react';
 import TestCommon from './testcommon';
 import BasicMenu from './testmenu';
 
 declare const module: {
   hot: {
     accept: any;
   };
 };
 
 interface AppProps {
   reqObj: object;
   callbackNgFn: () => void;
 }
 const App = (props: AppProps) => (
   // <AppRoutes reqObj={props.reqObj} callbackNgFn={props.callbackNgFn} />
   <>
     Test App
     <TestCommon />
     <BasicMenu />
   </>
 );
 if (module?.hot) {
   module.hot.accept(App);
 }
 
 App.defaultProps = {
   reqObj: {},
   callbackNgFn: () => {},
 };
 
 export default App;
 