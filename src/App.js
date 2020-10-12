import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import styled from 'styled-components';
import {
  Draggable,
  Droppable,
  DragDropContext
} from 'react-beautiful-dnd';

const Container = styled.div`
background-color: #282c34;
min-height: 100vh;
font-size: calc(10px + 2vmin);
color: white;
`;

const Heading = styled.h1`
width: 100%;
text-align: center;
margin:0;`;

const Flex = styled.div`
dispaly:flex;`;

const Box = styled.div`
width: 100vw;
background: linear-gradient(to right, #373b44, #4286f4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
height: 85vh;
padding: 10px;
display: flex;
align-items: center;
flex-direction:column;
overflow-y: scroll;
overflow-x: none;
box-sizing: border-box;
`;

const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
border-radius: 5px; 
width: 500px;
height: 200px;
padding: 2px;
padding-left: 15px;
padding-right: 15px;
margin-bottom: 15px;
color: #555;
display:flex;
align-items:center;
flex-direction: column;
color: #fff;
background: ${(props) => props.bg ? "linear-gradient(to right, #c31432, #240b36)" : "linear-gradient(to right, #11998e, #38ef7d)"};
`;

const Details = styled.div`
 display: flex;
 justify-content: space-between;
 width: 100%;
`;

const InfoText = styled.p`
font-size: 14px;
`;



function App() {

  const [covidData, setCovidData] = useState([{ "Country": "Afghanistan", "CountryCode": "AF", "Slug": "afghanistan", "NewConfirmed": 81, "TotalConfirmed": 39422, "NewDeaths": 4, "TotalDeaths": 1466, "NewRecovered": 27, "TotalRecovered": 32879, "Date": "2020-10-06T23:55:33Z", "Premium": {} }, { "Country": "Albania", "CountryCode": "AL", "Slug": "albania", "NewConfirmed": 144, "TotalConfirmed": 14410, "NewDeaths": 4, "TotalDeaths": 400, "NewRecovered": 150, "TotalRecovered": 8825, "Date": "2020-10-06T23:55:33Z", "Premium": {} }, { "Country": "Algeria", "CountryCode": "DZ", "Slug": "algeria", "NewConfirmed": 134, "TotalConfirmed": 52270, "NewDeaths": 8, "TotalDeaths": 1768, "NewRecovered": 94, "TotalRecovered": 36672, "Date": "2020-10-06T23:55:33Z", "Premium": {} }, { "Country": "Andorra", "CountryCode": "AD", "Slug": "andorra", "NewConfirmed": 260, "TotalConfirmed": 2370, "NewDeaths": 0, "TotalDeaths": 53, "NewRecovered": 75, "TotalRecovered": 1615, "Date": "2020-10-06T23:55:33Z", "Premium": {} }, { "Country": "Angola", "CountryCode": "AO", "Slug": "angola", "NewConfirmed": 128, "TotalConfirmed": 5530, "NewDeaths": 4, "TotalDeaths": 199, "NewRecovered": 14, "TotalRecovered": 2591, "Date": "2020-10-06T23:55:33Z", "Premium": {} }, { "Country": "Antigua and Barbuda", "CountryCode": "AG", "Slug": "antigua-and-barbuda", "NewConfirmed": 0, "TotalConfirmed": 107, "NewDeaths": 0, "TotalDeaths": 3, "NewRecovered": 0, "TotalRecovered": 96, "Date": "2020-10-06T23:55:33Z", "Premium": {} }, { "Country": "Argentina", "CountryCode": "AR", "Slug": "argentina", "NewConfirmed": 11242, "TotalConfirmed": 809728, "NewDeaths": 450, "TotalDeaths": 21468, "NewRecovered": 12345, "TotalRecovered": 649017, "Date": "2020-10-06T23:55:33Z", "Premium": {} }, { "Country": "Armenia", "CountryCode": "AM", "Slug": "armenia", "NewConfirmed": 181, "TotalConfirmed": 52677, "NewDeaths": 7, "TotalDeaths": 984, "NewRecovered": 38, "TotalRecovered": 44710, "Date": "2020-10-06T23:55:33Z", "Premium": {} }, { "Country": "Australia", "CountryCode": "AU", "Slug": "australia", "NewConfirmed": 25, "TotalConfirmed": 27173, "NewDeaths": 1, "TotalDeaths": 895, "NewRecovered": 2, "TotalRecovered": 24890, "Date": "2020-10-06T23:55:33Z", "Premium": {} }, { "Country": "Austria", "CountryCode": "AT", "Slug": "austria", "NewConfirmed": 750, "TotalConfirmed": 48896, "NewDeaths": 5, "TotalDeaths": 818, "NewRecovered": 429, "TotalRecovered": 39058, "Date": "2020-10-06T23:55:33Z", "Premium": {} }, { "Country": "Azerbaijan", "CountryCode": "AZ", "Slug": "azerbaijan", "NewConfirmed": 97, "TotalConfirmed": 40788, "NewDeaths": 2, "TotalDeaths": 598, "NewRecovered": 91, "TotalRecovered": 38587, "Date": "2020-10-06T23:55:33Z", "Premium": {} }, { "Country": "Bahamas", "CountryCode": "BS", "Slug": "bahamas", "NewConfirmed": 43, "TotalConfirmed": 4452, "NewDeaths": 0, "TotalDeaths": 96, "NewRecovered": 0, "TotalRecovered": 2375, "Date": "2020-10-06T23:55:33Z", "Premium": {} }, { "Country": "Bahrain", "CountryCode": "BH", "Slug": "bahrain", "NewConfirmed": 454, "TotalConfirmed": 73116, "NewDeaths": 1, "TotalDeaths": 261, "NewRecovered": 458, "TotalRecovered": 67933, "Date": "2020-10-06T23:55:33Z", "Premium": {} }, { "Country": "Bangladesh", "CountryCode": "BD", "Slug": "bangladesh", "NewConfirmed": 1442, "TotalConfirmed": 370132, "NewDeaths": 27, "TotalDeaths": 5375, "NewRecovered": 1526, "TotalRecovered": 283182, "Date": "2020-10-06T23:55:33Z", "Premium": {} }, { "Country": "Barbados", "CountryCode": "BB", "Slug": "barbados", "NewConfirmed": 1, "TotalConfirmed": 200, "NewDeaths": 0, "TotalDeaths": 7, "NewRecovered": 0, "TotalRecovered": 182, "Date": "2020-10-06T23:55:33Z", "Premium": {} }, { "Country": "Belarus", "CountryCode": "BY", "Slug": "belarus", "NewConfirmed": 844, "TotalConfirmed": 80696, "NewDeaths": 11, "TotalDeaths": 862, "NewRecovered": 155, "TotalRecovered": 75303, "Date": "2020-10-06T23:55:33Z", "Premium": {} }, { "Country": "Belgium", "CountryCode": "BE", "Slug": "belgium", "NewConfirmed": 1968, "TotalConfirmed": 132203, "NewDeaths": 14, "TotalDeaths": 10078, "NewRecovered": 33, "TotalRecovered": 19712, "Date": "2020-10-06T23:55:33Z", "Premium": {} }, { "Country": "Belize", "CountryCode": "BZ", "Slug": "belize", "NewConfirmed": 65, "TotalConfirmed": 2196, "NewDeaths": 1, "TotalDeaths": 30, "NewRecovered": 32, "TotalRecovered": 1378, "Date": "2020-10-06T23:55:33Z", "Premium": {} }, { "Country": "Benin", "CountryCode": "BJ", "Slug": "benin", "NewConfirmed": 0, "TotalConfirmed": 2357, "NewDeaths": 0, "TotalDeaths": 41, "NewRecovered": 0, "TotalRecovered": 1973, "Date": "2020-10-06T23:55:33Z", "Premium": {} }, { "Country": "Bhutan", "CountryCode": "BT", "Slug": "bhutan", "NewConfirmed": 1, "TotalConfirmed": 299, "NewDeaths": 0, "TotalDeaths": 0, "NewRecovered": 11, "TotalRecovered": 248, "Date": "2020-10-06T23:55:33Z", "Premium": {} }, { "Country": "Bolivia", "CountryCode": "BO", "Slug": "bolivia", "NewConfirmed": 239, "TotalConfirmed": 137107, "NewDeaths": 28, "TotalDeaths": 8129, "NewRecovered": 460, "TotalRecovered": 98007, "Date": "2020-10-06T23:55:33Z", "Premium": {} }]);

  function delay(fn, time = 1000) {
    return new Promise((resolve) => {
      setTimeout(() => {
        fn();
        resolve();
      }, time);
    });
  }

  function noop() { }

  function useDemoSensor(api) {
    console.log(api);
    const start = useCallback(
      async function start() {
        console.log("gg");
        const preDrag = api.tryGetLock('AF', noop);

        if (!preDrag) {
          console.warn('unable to start drag');
          return;
        }
        console.warn('starting drag');

        const actions = preDrag.snapLift();
        const { moveDown, moveUp, drop } = actions;

        await delay(moveDown);
        await delay(moveDown);
        await delay(moveUp);
        await delay(moveDown);
        await delay(moveDown);
        await delay(moveUp);
        await delay(moveDown);
        await delay(moveDown);
        await delay(moveDown);
        await delay(moveDown);
        await delay(moveUp);
        await delay(moveUp);
        await delay(drop);
      },
      [api],
    );
    useEffect(() => {
      console.log("call start");
      start();
    }, [start]);
  }

  const onDragEnd = useCallback((result) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }
    let destination = result.destination.index;
    let source = result.source.index;
    let newData = [...covidData];
    newData.splice(destination, 1, covidData[source]);
    newData.splice(source, 1, covidData[destination]);
    setCovidData(newData);
  }, [covidData]);
  return (
    <Container>
      <Heading>WELCOME TO COVID TRACKER </Heading>
      <DragDropContext onDragEnd={onDragEnd} sensors={[useDemoSensor]} >
        <Droppable direction="vertical" droppableId="1" type="main">
          {(provided, snapshot) => (
            <Box isDraggingOver={snapshot.isDraggingOver}  {...provided.droppableProps} ref={provided.innerRef}>
              {covidData.map((country, index) => {
                return (
                  <Draggable key={country.CountryCode} draggableId={country.CountryCode} index={index} type="card">
                    {(provided, dragSnapshot) => (
                      <Card
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        bg={dragSnapshot.isDragging}>
                        <p>{country.Country}</p>
                        <Details>
                          <Flex>
                            <InfoText>Confirmed Cases: {country.TotalConfirmed}</InfoText>
                          </Flex>
                          <Flex>
                            <InfoText> Total Deaths: {country.TotalDeaths} </InfoText>
                          </Flex>
                          <Flex>
                            <InfoText>Total Recovered: {country.TotalRecovered} </InfoText>
                          </Flex>
                        </Details>
                        <Details>
                          <Flex>
                            <InfoText>New Confirmed : {country.NewConfirmed}</InfoText>
                          </Flex>
                          <Flex>
                            <InfoText> New Deaths: {country.NewDeaths} </InfoText>
                          </Flex>
                          <Flex>
                            <InfoText>New Recovered: {country.NewRecovered} </InfoText>
                          </Flex>
                        </Details>
                      </Card>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
}

export default App;