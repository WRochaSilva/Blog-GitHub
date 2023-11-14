import styled from "styled-components";

export const ProfileContainer = styled.div`
  /* position: relative; */
  display: flex;
  width: 864px;
  height: 212px;
  border-radius: 10px;
  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  margin: -80px auto 0px;
  padding: 30px;
`;
export const Avatar = styled.img`
  /* position: absolute; */
  width: 148px;
  height: 148px;
  border-radius: 8px;
`;
export const ProfileInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 30px;
`;
export const ProfileTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ProfileName = styled.h1`
  color: ${(props) => props.theme["base-title"]};
  font-size: 24px;
  font-weight: 700;
`;
export const ProfileDescription = styled.h2`
  color: ${(props) => props.theme["base-text"]};
  font-size: 16px;
`;
export const DevResourceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: default;
`;
export const ProfileDevResource = styled.h3`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 16px;
`;
export const DescriptionDevResource = styled.span`
  margin-left: 5px;
`;

export const ButtonLinkGitHub = styled.p`
  background: transparent;
  color: #3294f8;
  font-size: 12px;
  font-weight: 700;
  border: none;
  cursor: pointer;
`;
export const LinkGitHub = styled.a`
  text-decoration: none;
`;
export const DescriptionLinkGitHub = styled.span`
  margin-right: 5px;
`;
