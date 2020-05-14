import styled from 'styled-components/native';

export const Container = styled.View`
  align-self: stretch;
  background-color: #fff;
  border-radius: 5px;
  elevation: 1;
  flex-direction: row;
  margin: 0 17px 20px;
  min-height: 100px;
`;

export const CoverContainer = styled.View`
  flex: 1.2;
  margin-right: 10px;
`;

export const Cover = styled.Image`
  flex: 1;
  min-height: 100px;
`;

export const ContentContainer = styled.View`
  flex: 2;
  justify-content: center;
  padding: 10px 6px;
`;

export const TitleRow = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const MovieTitle = styled.Text`
  color: #666;
  flex-wrap: wrap;
  flex: 0.9;
  font-size: 20px;
  font-weight: 900;
  margin-right: 5px;
`;

export const MovieReleaseYear = styled.Text`
  color: rgba(0, 0, 0, 0.54);
  flex: 0.5;
  font-size: 10px;
  text-align: right;
`;

export const ContentInfoRow = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const MovieScore = styled.Text`
  color: #673ab7;
  flex: 1.3;
  font-size: 26px;
  font-weight: bold;
  margin-right: 10px;
`;

export const MovieColumnInfo = styled.View`
  flex-direction: column;
  flex: 2;
`;

export const MovieCategories = styled.Text`
  color: rgba(0, 0, 0, 0.54);
  flex-wrap: wrap;
  font-size: 11px;
  font-weight: 300;
`;
