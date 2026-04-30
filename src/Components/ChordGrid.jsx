const ChordGrid = ({chordRowLength, tones, qualities}) => {


  //Business logic

  const generateToneRow = (chordRowLength) => {

    
    console.log('generateToneRow');


    const resultingToneRow = [];
    for(let i = 0; i < chordRowLength; i++){

      //if either tones or qualities has nothing selected, do not display the table
      if(!Object.values(tones).some(Boolean) || !Object.values(qualities).some(Boolean)) break;

      //push a random element from the selectedTones to the resultingToneRow
      const randomIndex = Math.floor(Math.random() * tones.length);
      resultingToneRow.push(tones[randomIndex]);
    }

    return resultingToneRow;
  };

  const addChordQualityToToneRow = (toneRow) => {
    
    console.log('addChordQualityToToneRow');

    const resultingChordRow = [];

    toneRow.forEach((item) => {
      const randomIndex = Math.floor(Math.random() * qualities.length);
      //concatenate the chordQuality to the tone and push to resulting array
      resultingChordRow.push(item + qualities[randomIndex]);
    })

    return resultingChordRow;
  };

  const getRandomChordRow = (chordRowLength) => {

    console.log('getRandomeChordRow');

    //get a row of the selected keys
    var resultingChordRow = generateToneRow(chordRowLength);

    //add chord quality to each element
    resultingChordRow = addChordQualityToToneRow(resultingChordRow);

    return resultingChordRow;
  }

  const chordRow = getRandomChordRow(chordRowLength);



    return (
        <div>
            <h1>ChordGrid</h1>

            <table className='center'>
              <tbody>
                {Array.from({ length: Math.ceil(chordRow.length / 4) }).map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    {Array.from({ length:4 }).map((_, columnIndex) => {
                      const itemIndex = rowIndex * 4 + columnIndex;
                      return (
                        <td key={columnIndex}  style={{ border: "1px solid blue", borderCollapse: "collapse", margin: "0" }}>{chordRow[itemIndex] ?? ""}</td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>

        </div>
    )
}

export default ChordGrid