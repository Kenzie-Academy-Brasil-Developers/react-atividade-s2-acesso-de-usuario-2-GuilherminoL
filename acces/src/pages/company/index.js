import { useParams } from "react-router-dom";
import members from "../../data/";
import { Link } from "react-router-dom";
const Company = () => {
  const { id } = useParams();
  const member = members.filter((member) => member.id === id)[0];
  return (
    <div>
      <h1>Detalhes da empresa</h1>
      <p>Nome: {member.name}</p>
      <Link to="/">Voltar</Link>
    </div>
  );
};
export default Company;
