import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  align-items: center;
`;

export const MovieList = styled.FlatList`
  width: 100%;
`;

export const TitleContainer = styled.View`
  width: 100%;
  padding-left: 17px;
  margin: 10px 0 0;
`;

export const GenrerTitle = styled.Text`
  color: #666666;
  font-size: 14px;
  font-weight: 700;
`;

export const GenrerList = styled.FlatList`
  margin: 15px;
  width: 100%;
`;
