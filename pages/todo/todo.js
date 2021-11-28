import {useAuth} from "../../lib/hooks/useAuth"
import { AppBar } from "../../components/appbar"
import { Title } from "../../ui/title"
//import { Legal, HighLight } from "../../ui/legal"
//import {PageLayout, PageHeader, PageFooter, PageBody} from '../../layouts/todo'
function ToDoPage (){
    
    const user = useAuth()
    if(user){
        return(
            <>
                  <AppBar/>
                  <Title>To Do Page</Title>
    
            
                  
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
    
    
}


 

export default ToDoPage