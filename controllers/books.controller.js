export const BookCreated = (req,res) =>{
  console.log(req.body);

  return res.json(req.body);

}

export const BookFetched = (req,res) =>{
  res.send("book get fetched");
}

export const BookUpdated = (req,res) =>{
  res.send("books are updated");
}
export const BookDeleted = (req,res) => {
  res.send("book got deleted");
}   
