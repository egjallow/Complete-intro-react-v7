import { useState, useEffect } from "react";
import Pet from "./Pet";
import useBreedList from "./useBreedList";

const ANIMALS = ["birds", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  // const location = 'Seattle, WA';

  const [location, updateLocation] = useState("Seattle, WA");
  const [animal, updateAnimal] = useState("");
  const [breed, updateBreed] = useState("");
  const [pets, setPets] = useState([]);
  const[ breeds] =  useBreedList(animal);
  console.log(pets)

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets)
  }
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => {
              updateLocation(e.target.value);
            }}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animanl"
            value={animal}
            onChange={(e) => {
              updateAnimal(e.target.value);
              updateBreed("");
            }}
            onBlur={(e) => {
              updateAnimal(e.target.value);
              updateBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => {
              return (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="animanl"
            value={breed}
            onChange={(e) => {
              updateBreed(e.target.value);
            }}
            onBlur={(e) => {
              updateBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((breed) => {
              return (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              );
            })}
          </select>
        </label>

        <button>Submit</button>
      </form>
      {pets.map((pet)=>(
          <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id }/>
      ))}
    </div>
  );
};

export default SearchParams;
