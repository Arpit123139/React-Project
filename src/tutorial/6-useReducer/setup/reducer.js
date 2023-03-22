export const reducer=(state,action)=>{
    if(action.type==="ADD_ITEM"){
       const newPeople=[...state.people,action.payload]
       return {
         ...state,
         people:newPeople,
         isModalOpen:true,
         modalContent:"Item Added"
       }
    }
    if(action.type==="ADD_SOME_VALUE"){
     return {
       ...state,
       isModalOpen:true,
       modalContent:"Enter Name"
     }
    }
 
    if(action.type==='CLOSE'){
     return {
       ...state,
       isModalOpen:false
     }
    }
 
    if(action.type==='REMOVE_ITEM'){
     const newPeople = state.people.filter(
       (person) => person.id !== action.payload
     );
     return { ...state, people: newPeople,isModalOpen:true,modalContent:"Item Removed" };
    }
 
    throw new Error("Unhandled Action Type")
 }