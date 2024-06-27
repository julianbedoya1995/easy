import { User } from "../../../helpers/User";
import "./Configuration.css"
export const Configuration = () => {
   const propUser = User()
    return (
      <>
        <img src={propUser.photo} alt={propUser.alt} />
        <p>{propUser.name}</p>
        <p>{propUser.userName}</p>
      </>
    );
  };