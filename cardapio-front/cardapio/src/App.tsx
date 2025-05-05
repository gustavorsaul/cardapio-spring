import { useState } from 'react'
import { Card } from "./components/card/card"
import './App.css'
import type { FoodData } from './interface/FoodData';
import { useFoodData } from './components/hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {

  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen]= useState(false);
  const handleOpenModel = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map(foodData => 
          <Card 
            price={foodData.price} 
            title={foodData.title} 
            image={foodData.image}
          />)}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModel}/>}
      <button onClick={handleOpenModel}>Novo</button>
    </div>
  )
}

export default App
