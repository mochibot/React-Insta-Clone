import styled from 'styled-components';

export const CommentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1% 2%;
`
export const CommentText = styled.div`
  > h3 {
    font-weight: bold;
    display: inline;
  }

  > p {
    padding-left: 0.6rem;
    display: inline;
  }
`

export const DeleteCommentButton = styled.button`
  border: none;
  background: white;
  margin: 0;
  padding: none;
  font-size: 1.6rem;
  outline: none;
  color: rgb(56, 151, 240);
`;  