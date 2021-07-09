const List = ({people}) => {
    return (
      <>
        {
            people.map(person => {
                const {id, name, age, image} = person
                return (
                    <div className="person" key={id}>
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age}</p>
                        </div>
                    </div>
                )
            })
        }
      </>
    );
};
  
export default List;