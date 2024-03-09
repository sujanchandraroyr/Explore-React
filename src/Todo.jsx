// export default function Todo({name, num}) {
//     return <li>ok vai {name} {num}</li>
// }

// export default function Todo({name, isDone}) {
//     if(isDone){
//         return <li>ok vai {name} </li> 
//     }
//     else{
//         return <li>Its not ok vai jan {name}</li>
//     }
// }

// export default function Todo({name, isDone}) {
//     if(isDone){
//         return <li>ok vai {name} </li> 
//     }
    
//         return <li>Its not ok vai jan {name}</li>
    
// }
// export default function Todo({name, isDone}) {
//     return (
//         <li>{isDone ? 'Finish' : 'Work it'} vai jan {name}</li>
//     )
// }

// export default function Todo({name, isDone}) {
//     return (
//         <li>{name} {isDone && 'Done'}</li>
//     )
// }

export default function Todo({name, isDone}) {
    let lisItem;
    if(isDone){
        lisItem =  <li>{name} Finished:</li>
    }
   else{
    lisItem = <li>{name} work on:</li>
   }
   return lisItem;
}