import { useParams } from "react-router-dom";
import members from "../../data/index";
import { Link } from "react-router-dom";
const Costumer = () => {
  const params = useParams();
  const costumerId = params.id;
  const member = members.filter((member) => member.id === costumerId)[0];
  return (
    <div>
      <h1>Detalhes do cliente</h1>
      <p>Nome: {member && member.name}</p>
      <Link to="/">Voltar</Link>
    </div>
  );
};
export default Costumer;
