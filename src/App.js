import './App.css';
import React, { useState } from 'react';


function App() {

  const [year, setYear] = useState(1900);
  const [zodiac, setZodiac] = useState('');
  const [zodiacImage, setZodiacImage] = useState('');

  function chineseZodiac() {
    const zodiacSigns = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
    const zodiacSignsImage = [
      "https://cdn.leonardo.ai/users/2cbfd30f-6e5b-419d-94c0-00853dd21810/generations/c54cfa8e-01e5-4e64-88cf-fbe70ec7fe96/Default_Rat_0.jpg",
      "https://cdn.leonardo.ai/users/2cbfd30f-6e5b-419d-94c0-00853dd21810/generations/a10fe079-9572-4717-8edf-82c02eef1d1b/Default_Ox_0.jpg",
      "https://cdn.leonardo.ai/users/2cbfd30f-6e5b-419d-94c0-00853dd21810/generations/29a55291-7fcd-410d-bd31-08aed08ae3b7/Default_Tiger_0.jpg",
      "https://cdn.leonardo.ai/users/2cbfd30f-6e5b-419d-94c0-00853dd21810/generations/5d40feed-2f0b-4bea-b0a6-5e7f64018758/Default_Rabbit_0.jpg",
      "https://cdn.leonardo.ai/users/2cbfd30f-6e5b-419d-94c0-00853dd21810/generations/91a1bb08-6b70-46ec-af7f-19cbfa59d7e2/Default_Dragon_0.jpg",
      "https://cdn.leonardo.ai/users/2cbfd30f-6e5b-419d-94c0-00853dd21810/generations/7077a167-32ba-4f5f-8dc3-e141095dcfa0/Default_Snake_0.jpg",
      "https://cdn.leonardo.ai/users/2cbfd30f-6e5b-419d-94c0-00853dd21810/generations/b0a89736-4850-4004-9c42-45424281e2de/Default_Horse_0.jpg",
      "https://cdn.leonardo.ai/users/2cbfd30f-6e5b-419d-94c0-00853dd21810/generations/4c6e91a7-0479-4ee5-bb56-dcebeea434b8/Default_Goat_animal_0.jpg",
      "https://cdn.leonardo.ai/users/2cbfd30f-6e5b-419d-94c0-00853dd21810/generations/05d49202-7a4b-454e-bb91-7b9c2a3fbccc/Default_monkey_0.jpg",
      "https://cdn.leonardo.ai/users/2cbfd30f-6e5b-419d-94c0-00853dd21810/generations/c7b5a00e-3684-4d54-9a3b-f4354fd4600c/Default_Rooster_0.jpg",
      "https://cdn.leonardo.ai/users/2cbfd30f-6e5b-419d-94c0-00853dd21810/generations/4aa80b1b-810e-45d0-a9d3-784dc5728ad3/Default_Dog_0.jpg?w=512",
      "https://cdn.leonardo.ai/users/2cbfd30f-6e5b-419d-94c0-00853dd21810/generations/58ee76ba-9458-4500-ae3a-55f0c8c5465a/Default_Pig_0.jpg"];
    const startYear = 1900; // Start year of the Chinese zodiac cycle
    setZodiac(zodiacSigns[(year - startYear) % 12])
    setZodiacImage(zodiacSignsImage[(year - startYear) % 12])
    return zodiacSigns[(year - startYear) % 12];
  }


  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Chinese Zodiac</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Chinese zodiac</h5>
                <div class="form-group">
                  <label for="name">Year</label>
                  <input type="number" aria-describedby="numberHelp" class="form-control" id="name" value={year} onChange={e => setYear(e.target.value)} />
                  <small id="numberHelp" className="form-text text-muted">Must be superior to 1900</small>
                </div>
                <button onClick={chineseZodiac} class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card card-3d">
              <div class="card-body">
                <h5 class="card-title">{zodiac}</h5>
                <img src={zodiacImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
