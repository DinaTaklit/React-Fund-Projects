import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
  return (
    <>
      {
        tours.map(tour => {
          return (
              <Tour {...tour} key={tour.id}  removeTour={removeTour}/>
          )
        })
      }
    </>
  );
};

export default Tours;