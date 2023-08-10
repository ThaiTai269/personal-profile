import { Col} from "react-bootstrap";
export const ProjectCard = ({title, description,imgURL, URL}) =>{
    return (
        <Col size= {12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgURL}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div className="proj-demo">
                        <a href={URL} target="_blank">DEMO</a>
                    </div>
                </div>
               
            </div>
        </Col>
    )
}