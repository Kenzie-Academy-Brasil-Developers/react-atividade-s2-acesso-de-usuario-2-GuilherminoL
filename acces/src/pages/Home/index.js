import { Link } from "react-router-dom";
import members from "../../data";

const Home = () => {
  console.log(members);
  return (
    <ul>
      {members.map((member, index) => {
        return (
          <li key={index}>
            <Link
              to={
                member.type === "pj"
                  ? `/company/${member.id}`
                  : `/costumer/${member.id}`
              }
            >
              {member.name}
            </Link>
          </li>
        );

        // if (member.type === "pj") {
        //   return (
        //     <li key={index}>
        //       <Link to={`/company/${member.id}`}>{member.name}</Link>;
        //     </li>
        //   );
        // } else {
        //   return (
        //     <li key={index}>
        //       <Link to={`/costumer/${member.id}`}>{member.name}</Link>;
        //     </li>
        //   );
        // }
      })}
    </ul>
  );
};
export default Home;
