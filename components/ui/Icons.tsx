import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faReact,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faJs

} from '@fortawesome/free-brands-svg-icons';


export const Icons = ({tech}:{tech?:string})=> {
    
    const renderer = (type?:string)=>{
        switch(type){
            case 'Github': 
                return  <FontAwesomeIcon icon={faGithub}  size='xl'/>
            case 'React': 
                return  <FontAwesomeIcon icon={faReact}  size='xl'/>
            case 'HTML': 
                return  <FontAwesomeIcon icon={faHtml5} size='xl' />
            case 'CSS': 
                return  <FontAwesomeIcon icon={faCss3Alt} size='xl' />
            case 'Bootstrap': 
                return  <FontAwesomeIcon icon={faBootstrap} size='xl' />
            case 'JavaScript': 
                return  <FontAwesomeIcon icon={faJs} size='xl' />
        

            default:
                return ""
        }
    }
    const options = renderer(tech)
  return (

      <>
      {options}
      </>
  );
}