import { ListItem } from "@material-ui/core";
import React, {
    createContext,
    useReducer,
    useContext,
    useEffect,
    useState,
  } from "react";
import { db } from "./firebase";

export const InputContext = createContext();
export function useInput() { return useContext(InputContext); }


const initialState = {
    user: null,

    current : {
        date: "",
        time: "",
        need: "",
        trigger: "",
        with: "",
        location: "",
        feeling: "",
    }

}


const reducer = (state, action) => {

    switch (action.type) {

        case "SET_USER":
          console.log("Login Reducer Called");
          return {
            ...state,
            user: action.user,
          };


        case "SET_DATE":
            return {
                ...state,
                current : {
                ...state.current,
                date : action.payload
                }
            };


        case "SET_TIME":
            return {
                ...state,
                current : {
                ...state.current,
                time : action.payload
                }
            };
        

        case "SET_NEED":
            return {
                ...state,
                current : {
                ...state.current,
                need : action.payload
                }
            };
        
        case "SET_TRIGGER":
            return {
                ...state,
                current : {
                ...state.current,
                trigger : action.payload
                }
            };

        case "SET_FEELING":
            return {
                ...state,
                current : {
                ...state.current,
                feeling : action.payload
                }
            };

        case "SET_WITH":
            return {
                ...state,
                current : {
                ...state.current,
                with : action.payload
                }
            };

        case "SET_LOCATION":
            return {
                ...state,
                current : {
                ...state.current,
                location : action.payload
                }
            };
        case "ADD_SMOKE_EVENT":

            var eventData = []
            var complete = false
            eventData[0] = Date()
            eventData[1] = state.current.trigger
            eventData[2] = state.current.need
            eventData[3] = state.current.location
            eventData[4] = state.current.with
            eventData[5] = state.current.feeling
            eventData.indexOf("")===-1 ? complete=true : complete = false
            
            // alert(complete ? eventData : "Please complete")
            if(complete) { alert(eventData) ; 
                db.collection(`${state.user.uid}`)
                .add({
                  
                    timestamp: db.FieldValue.serverTimestamp(),
                  
                });
                window.open(`/DashBoard` ,"_self") }
                else alert("Please complete" ) 
            
            return { ...state

            };
        
        default:
            return state
    
    
        
    
    
        }
            

    }

    export function MainProvider({ children }) {
        const [smokingData, dispatch] = useReducer(reducer, initialState);
      
          
        // useEffect(() => {
        //   dispatch({ type: "initialise" });
        // }, []);
      
        return (
          <InputContext.Provider    value={{ smokingData:smokingData, dispatch: dispatch }}>         
            {children}
          </InputContext.Provider>
        );
      }
