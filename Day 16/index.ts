// 46: Enhanced Laptop Object: Construct an object for a laptop including properties make,model,year,
// and a method describe() that logs a sentence about the laptop.

function describe(make: string, model: string, year: number) {
    const laptop = {
      make,
      model,
      year,
    };
    return laptop;
  }
  const myLaptop = describe("Dell", "Inspiron 15 5510", 2021);
  console.log(myLaptop);
  
  // 47: Advanced Array Destructuring:Given an array of objects representing different laptops,each with
  // properties make,model and year,use array destructuring to assign the first and second laptops to
  // variables.Then,log these variables.
  
  const laptops = [
    { make: "Apple", model: "MacBook Pro", year: 2023 },
    { make: "Dell", model: "XPS 13", year: 2022 },
    { make: "HP", model: "Spectre x360", year: 2024 },
  ];
  
  const [firstLaptop, secondLaptop] = laptops;
  
  console.log(firstLaptop);
  console.log(secondLaptop);
  
  // 48: Combining Arrays with Spread Operators:Suppose you're comparing prices of two different sets of
  // laptops.Use the spread operator to combine these arrays into a single array sorted in ascending order,
  // then log the result.
  
  const laptopPrice1 = [191999, 175625, 172999];
  const laptopPrice2 = [334999, 330999, 392999];
  
  const allLaptopPrices = [...laptopPrice1, ...laptopPrice2];
  allLaptopPrices.sort((a, b) => a - b);
  console.log(allLaptopPrices);
  