import { Avatar, ProfileContainer } from "./styles";
import imageAvatar from "../../assets/avatar.png";

export const Profile = () => {
  return (
    <ProfileContainer>
      <Avatar src={imageAvatar} />
    </ProfileContainer>
  );
};
