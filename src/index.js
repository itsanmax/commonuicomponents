

/**
 * @author:  sandeep.gupta1@timesinternet.in
 * @desc: entry  point  to  render react components  based on environment
 */
 import React from "react";
 import { createRoot } from "react-dom/client";
 import environment from "Env_Path";
 import App from "./app";

 import {Input, User} from './components/common';
 
 
 const renderApplication = (element, reqObj={}, callbackNgFn = null) => {
     console.log("== Inside React Project: renderApplication ===", element);
     const root = createRoot(element);
     root.render(<App reqObj={reqObj} callbackNgFn={callbackNgFn} />);
   }
 
   /**
  * Below code need to run only for react Local project in watch mode
  */
 console.log("=============>>>> React MODE:   ", environment.MODE);
 if (environment.MODE !== 'PROD' && window.location.host !== 'denmark.local' && window.location.host.match(/localhost/)) {
     console.log('Looks like we are in development mode!');
     renderApplication(document.getElementById('root'));
   }
 
 var g = window || global;
 
 g['_DEN_UI'] = {
   renderComponent: renderApplication,
   commonComponents: {Input, User}
 };
 
 export default g;
 /**
  * 
  * export { default as Input } from './input/input.component';
export { default as Select } from './select/select.component';
export { default as User } from './user/user.component'; 
  * */ 
