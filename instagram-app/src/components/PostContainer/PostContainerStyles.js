import styled from 'styled-components';

export const PostPageDiv = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

export const PostContentDiv = styled.div`
  width: 600px;
  margin: 60px auto 0 auto;
`;

const FlexBox = styled.div`
  display: flex;
`;

export const PostContainerDiv = styled(FlexBox)`
  flex-direction: column;
  border: 1px solid lightgray;
  margin: 2% 0;
`;

export const PostLogoDiv = styled(FlexBox)`
  width: 100%;
  align-items: center;
  padding: 2% 3%;

  > img {
    width: 30px;
    border-radius: 50%;
  }

  > h3 {
    font-weight: bold;
    padding-left: 2% 
  }
`;

export const PostImage = styled.img`
  display: block;
  width: 100%;
`

export const PostIconDiv = styled(FlexBox)`
  padding: 1% 2%;
    
  & > * {
    font-size: 2.6rem;
    margin-right: 1.8rem;
  }
`;

export const PostLikesDiv = styled.div`
  font-weight: bold;
  padding: 1% 2%;
`;

export const PostDateDiv = styled.div`
  padding: 1% 2% 1% 2%;
  text-transform: uppercase;
  font-size: 1.2rem;
  color: lightgray;
`;

export const CommentForm = styled.form`
  display: flex;  
  position: relative;
  align-items: center;
  margin: 1% 2%;
  border-top: 1px solid lightgray;

  > textarea {
    width: 90%;
    font-size: 1.4rem;
    font-family: 'Open Sans', sans-serif;
    border: none;
    resize: none;
    outline: none;

    &::placeholder {
      color: rgb(196, 196, 196);
    }
  }
`;

export const PostButton = styled.button`
  border: none;
  background: white;
  position: absolute;
  font-size: 1.6rem;
  padding: 1rem;
  margin-left: 90%;
  outline: none;
`;