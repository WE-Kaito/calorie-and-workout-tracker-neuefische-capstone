import styled from "styled-components";

const EditPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: fit-content;
  height: 75%;
`;

const EditOption = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function EditPage() {
  return (
    <EditPageContainer>
      <EditOption></EditOption>
      <EditOption></EditOption>
      <EditOption></EditOption>
    </EditPageContainer>
  );
}
