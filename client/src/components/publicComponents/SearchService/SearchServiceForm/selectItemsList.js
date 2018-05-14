const rowItems = [
  'rings',
  'Bicycles, prams, strollers',
  'sticks, crutches',
  'bags, baby carriers, backpacks',
  'bracelets, bracelets',
  'footwear',
  'hats, gloves, scarves',
  'music CDs, discs',
  'keys',
  'necklaces, chains',
  'computer, tablet, pen-drive',
  'documents',
  'games, console',
  'garments, linens',
  'mp3 players, radio',
  'books',
  'cameras',
  'glasses',
  'different objects',
  'umbrellas',
  'watches',
  'wallets, purses',
  'brooches, pendants',
  'mobile phones, accessories',
  'various cards',
  'italian currency, foreign currency'
]

const capitalize = rowItems => {
  let newItemArray = []
  for(var i = 1 ; i < rowItems.length ; i++){
    newItemArray[i] = rowItems[i].charAt(0).toUpperCase() + rowItems[i].substr(1)
  }
  return newItemArray
}

const sortItem = rowItems.sort()

const items = capitalize(sortItem)

export default items
