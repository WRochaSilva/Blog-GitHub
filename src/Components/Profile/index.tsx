import {
  Avatar,
  ProfileContainer,
  ProfileDescription,
  ProfileInfoContent,
  ProfileName,
  ProfileSocialMedia,
} from "./styles";
import imageAvatar from "../../assets/avatar.png";

export const Profile = () => {
  return (
    <ProfileContainer>
      <Avatar src={imageAvatar} />
      <ProfileInfoContent>
        <ProfileName>Cameron Williamson</ProfileName>
        <ProfileDescription>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </ProfileDescription>
        <ProfileSocialMedia>cameronwll</ProfileSocialMedia>
      </ProfileInfoContent>
    </ProfileContainer>
  );
};
