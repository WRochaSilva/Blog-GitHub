import {
  HeaderSearchInput,
  Input,
  SearchInputContainer,
  SubTitle,
  Title,
} from "./styles";

export const SearchInput = () => {
  return (
    <SearchInputContainer>
      <HeaderSearchInput>
        <Title>Publicações</Title>
        <SubTitle>6 publicações</SubTitle>
      </HeaderSearchInput>
      <Input placeholder="Buscar conteúdo" />
    </SearchInputContainer>
  );
};
