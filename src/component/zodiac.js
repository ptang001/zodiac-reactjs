function getChineseZodiac(year) {
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
    return zodiacSigns[(year - startYear) % 12];
  }

module.exports = { getChineseZodiac };