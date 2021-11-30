<<<<<<< HEAD
import { AppBar } from "../../components/appbar"
import { Title } from "../../ui/title"
//import { Legal, HighLight } from "../../ui/legal"
//import {PageLayout, PageHeader, PageFooter, PageBody} from '../../layouts/todo'
function todo (){
    
    return(
        <>
              <AppBar/>
              <Title>To do Page</Title>

        
              
        </>
    )

=======
import {useAuth} from "../../lib/hooks/useAuth"
import { AppBar } from "../../components/appbar"
import { Title } from "../../ui/title"
import todo from "../../components/data/todo.json"
import ToDoItem from "../../components/ToDoItem/ToDoItem"
//import { Legal, HighLight } from "../../ui/legal"
//import {PageLayout, PageHeader, PageFooter, PageBody} from '../../layouts/todo'

function ToDoPage (){
    
    const user = useAuth()
    //const getStore = dataFetcher('../../components/data/todo.json')
    console.log(todo[1])
    console.log


    if(user){
        return(
            <>
                  <AppBar/>
                  <Title>To Do Page</Title>
                  <ToDoItem/>


                  




    
            
                  
            </>
        )
    
    } else{
        return(
            <>
                  <AppBar/>
                  <Title>Please Go Away</Title>
    
            
                  
            </>
        )
    }
    
>>>>>>> dcbce89ea0e9d87ead560e65855fc9abedb11058
    
}


 

<<<<<<< HEAD
export default todo
=======
export default ToDoPage
>>>>>>> dcbce89ea0e9d87ead560e65855fc9abedb11058
