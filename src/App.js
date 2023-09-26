import React, { useState } from "react";
import "./App.css";
import { foodData, drinks } from "./food-database";
import Stack from "@mui/material/Stack";
// import Button from '@mui/material/Button';
import { Button } from "@mui/material";
function App() {
  const [randomFood, setRandomFood] = useState(false);
  const [randomDrink, setRandomDrink] = useState(false);
  const getRandomFood = () => {
    if (foodData.length > 0) {
      const randomIndex = Math.floor(Math.random() * foodData.length);
      return foodData[randomIndex];
    }
    return null;
  };
  const getRandomDrink = () => {
    if (drinks.length > 0) {
      const randomIndex = Math.floor(Math.random() * drinks.length);
      return drinks[randomIndex];
    }
    return null;
  };

  const handleGenerateFood = () => {
    const randomFood = getRandomFood();
    setRandomFood(randomFood);
  };
  const handleGenerateDrink = () => {
    const randomDrink = getRandomDrink();
    setRandomDrink(randomDrink);
  };
  const handleResetFood = () => {
    setRandomFood(false);
    setRandomDrink(false);
  };
  // const handleResetDrink = () => {
  //   setRandomDrink(false);
  // }

  return (
    <div className="App">
      <header className="App-header">
        <p>Hôm nay ăn gì nào bạn, bạn chọn đi:</p>
        <Stack spacing={2}>
          {" "}
          {/* Use Stack component */}
          <div>
          <Button
            variant="contained" // Tùy chỉnh kiểu nút
            color="primary" // Tùy chỉnh màu sắc
            size="large" // Tùy chỉnh kích thước
            onClick={handleGenerateFood}
          >
            Ăn gì?
          </Button>
          {/* <Button variant="outlined" onClick={handleResetFood}>Reset</Button> */}
          </div>
          
        </Stack>
        
        <Stack spacing={2}>
          <div style={{ marginBottom: '20px' }}>
          {" "}
          {/* Use Stack component */}
          <Button
            variant="contained" // Tùy chỉnh kiểu nút
            color="primary" // Tùy chỉnh màu sắc
            size="large" // Tùy chỉnh kích thước
            onClick={handleGenerateDrink}
          >
            uống gì?
          </Button>
          
          </div>
          
        </Stack>
        {  randomFood  && (
          <div>
            <p>
              Đi ăn: <strong>{randomFood.name}</strong> thôi!!!!!
            </p>
            <img
              src={randomFood.image}
              alt={randomFood.name}
              style={{
                maxWidth: "100%",
                maxHeight: "400px",
                width: "auto",
                height: "auto",
                style: { marginBottom: '20px' }
              }}
              loading="lazy"
            />
          </div>
        )}
        {
          randomDrink && (
            <div>
            <p>
              Đi uống: <strong>{randomDrink.name}</strong> thôi!!!!!
            </p>
            <img
              src={randomDrink.image}
              alt={randomDrink.name}
              style={{
                maxWidth: "100%",
                maxHeight: "400px",
                width: "auto",
                height: "auto",
              }}
              loading="lazy"
            />
          </div>
          )
        }
        <Button variant="outlined" onClick={handleResetFood}>Reset</Button>
      </header>
    </div>
  );
}

export default App;
