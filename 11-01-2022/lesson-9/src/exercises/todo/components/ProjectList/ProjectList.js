import {Button, ListGroup, ListGroupItem, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";


export const ProjectList = ({projects, removeProject}) => {

 return <ListGroup className="mb-3" >
   {
     projects.map((item) => <ListGroupItem key={item.id}>
       <Link to={`/projects/${item.id}`}>
         <Stack direction="horizontal" gap={3}>
           <div style={{flexGrow:1}}>
             [{item.id}] {item.name}
           </div>
           <Button variant="danger" size="sm" onClick={() => removeProject(item.id)}>x</Button>
         </Stack>
       </Link>
     </ListGroupItem>)
   }
 </ListGroup>
}
