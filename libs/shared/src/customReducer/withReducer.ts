import React from "react";
// import { addingReducer } from "./middleWares/addingReducer.action";

/**
 * HOC for adding dynamic reducers to the global store.
 *
 * Typical usage:
 *   export default withReducer('myComponent', reducer)(MyComponent)
 *
 * Thoughts:
 *   This uses Context which has all of the warnings in the React
 *   docs to not use, but it's still documented and works here.
 *   If context seems like a bad idea, I *think* you could instead
 *   use react-redux.connect here instead. Once connected, this
 *   HOC would have access to store as a prop. Once you have
 *   access to store, you have access to injectReducer. That's the
 *   main goal, get access to the store object.
 */
const withReducer = (key:string, reducer:any,store:any) => (WrappedComponent:any) => {
  const Extended = (props:any, context:any) => {
    // Here's where we add the new reducer.
    // const store = useStore();
    // const dispatch = useDispatch();
    // let addedReducer = useSelector((state) => state.addedReducer.addedReducer);
    // See initilizeStore for details on how this works.
    // if (!addedReducer.includes(key)) {
      console.log("key",key,reducer,store,"the new change")
      store.injectReducer(key, reducer);
    // }
    // Now just give back the original component as-is.
    return React.createElement(WrappedComponent as any, props);
  };

  // // To use context, you must define contextTypes
  // Extended.contextTypes = {
  //   store: object,
  // };

  return Extended;
};

export { withReducer };
