import {
  Avatar,
  DescriptionDevResource,
  ProfileContainer,
  ProfileDescription,
  ProfileInfoContent,
  ProfileName,
  ProfileDevResource,
  DevResourceContainer,
  ProfileTitle,
  ButtonLinkGitHub,
  LinkGitHub,
  DescriptionLinkGitHub,
} from "./styles";
import imageAvatar from "../../assets/avatar.png";
import { FaGithub, FaUsers } from "react-icons/fa";
import { FaBuildingUser, FaArrowUpRightFromSquare } from "react-icons/fa6";

export const Profile = () => {
  return (
    <ProfileContainer>
      <Avatar src={imageAvatar} />
      <ProfileInfoContent>
        <ProfileTitle>
          <ProfileName>Cameron Williamson</ProfileName>
          <LinkGitHub href="https://www.google.com.br" target="_blank">
            <ButtonLinkGitHub>
              <DescriptionLinkGitHub>
                <span>GITHUB</span>
              </DescriptionLinkGitHub>
              <FaArrowUpRightFromSquare />
            </ButtonLinkGitHub>
          </LinkGitHub>
        </ProfileTitle>
        <ProfileDescription>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </ProfileDescription>
        <DevResourceContainer>
          <ProfileDevResource>
            <FaGithub />
            <DescriptionDevResource>cameronwll</DescriptionDevResource>
          </ProfileDevResource>
          <ProfileDevResource>
            <FaBuildingUser />
            <DescriptionDevResource>Rocketseat</DescriptionDevResource>
          </ProfileDevResource>
          <ProfileDevResource>
            <FaUsers />
            <DescriptionDevResource>32 seguidores</DescriptionDevResource>
          </ProfileDevResource>
        </DevResourceContainer>
      </ProfileInfoContent>
    </ProfileContainer>
  );
};
