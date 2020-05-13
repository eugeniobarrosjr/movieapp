import styled from 'styled-components/native';

export const Container = styled.View`
  align-self: stretch;
  height: 40px;
  margin-bottom: 20px;
  margin-left: 17px;
  margin-right: 17px;

  background-color: #fff;
  border-radius: 5px;
  elevation: 1;
`;

export const MovieTitle = styled.Text`
  font-size: 20px;
  font-weight: 900;
  line-height: 24px;

  color: #666;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Column = styled.View`
  flex-direction: column;
`;

export const MovieReleaseYear = styled.Text`
  font-size: 10px;
  line-height: 24px;

  color: rgba(0, 0, 0, 0.54);
`;

export const MovieScore = styled.Text`
  font-size: 26px;
  font-weight: bold;

  color: #673ab7;
`;

export const MovieClassificationAndTime = styled.Text`
  font-size: 9px;

  color: rgba(0, 0, 0, 0.54);
`;

export const MovieCategories = styled.Text`
  font-weight: 300;
  font-size: 11px;

  color: rgba(0, 0, 0, 0.54);
`;
