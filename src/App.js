import React, { useState } from "react";
import "./App.css";
import foodData from "./food-database.js"; // Import dữ liệu từ tệp JavaScript
import Stack from "@mui/material/Stack";
// import Button from '@mui/material/Button';
import { Button } from "@mui/material";

function App() {
  const [randomFood, setRandomFood] = useState(false);

  const getRandomFood = () => {
    if (foodData.length > 0) {
      const randomIndex = Math.floor(Math.random() * foodData.length);
      return foodData[randomIndex];
    }
    return null;
  };

  const handleGenerateFood = () => {
    const randomFood = getRandomFood();
    setRandomFood(randomFood);
  };
  const handleResetFood = () => {
    setRandomFood(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Hôm nay ăn gì nào bạn, bạn chọn đi:</p>
        <Stack spacing={2}>
          {" "}
          {/* Use Stack component */}
          <Button
            variant="contained" // Tùy chỉnh kiểu nút
            color="primary" // Tùy chỉnh màu sắc
            size="large" // Tùy chỉnh kích thước
            onClick={handleGenerateFood}
          >
            Generate Food
          </Button>
          <Button variant="outlined" onClick={handleResetFood}>Reset</Button>
        </Stack>
        {randomFood && (
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
              }}
            />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
