import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.ScrollView`
  margin: 0 17px 10px;
`;

export const Banner = styled.Image`
  height: 300px;
  margin-top: 1px;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: 900;
  margin-top: 10px;
`;
export const ReleaseDate = styled.Text`
  color: rgba(0, 0, 0, 0.54);
  font-size: 12px;
`;

export const GenresContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px 0 25px;
`;

export const Chip = styled.View`
  align-items: center;
  background-color: #fff;
  border-color: #666;
  border-radius: 16px;
  border-width: 0.2px;
  height: 30px;
  justify-content: center;
  margin-right: 5px;
  margin-top: 5px;
  min-width: 120px;
`;

export const ChipTitle = styled.Text`
  color: #666;
  font-size: 13px;
`;

export const PlotTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

export const Plot = styled.Text`
  color: rgba(0, 0, 0, 0.54);
  font-size: 14px;
  margin-top: 5px;
`;
