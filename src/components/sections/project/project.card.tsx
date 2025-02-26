import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CgWebsite } from "react-icons/cg";

interface IProps {
  imgPath: string;
  title: string;
  description: string;
  githubLink?: string;
  demoLink: string;
}

function ProjectCard(props: IProps) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{ maxHeight: 215 }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{props.title}</Card.Title>
        <div className="d-flex flex-column justify-content-between h-100">
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <div>
            <Button variant="primary" href={props.demoLink} target="_blank">
              <CgWebsite /> &nbsp;
              {"Project"}
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
