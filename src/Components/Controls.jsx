const Controls = ({
    chordRowLength, setChordRowLength,
    tones, setTones,
    qualities, setQualities
}) => {

    const handleToneChange = (name) => {
        setTones(prev =>
        prev.includes(name)
            ? prev.filter(item => item !== name) // remove the item if it already exists
            : [...prev, name] // add if it does not exist
        );
    };

    const handleQualitiesChange = (name) => {
        setQualities(prev =>
        prev.includes(name)
            ? prev.filter(item => item !== name) // remove the item if it already exists
            : [...prev, name] // add if it does not exist
        );
    };

    return (
        <div>
            <h3>Select Tones</h3>

            <div>
                <table className='center'>
                    <tbody>
                        <tr>
                            <td><label>A<input type='checkbox' checked={tones.includes('A')} onChange={() => handleToneChange('A')}></input></label></td>
                            <td><label>Bb<input type='checkbox' checked={tones.includes('Bb')} onChange={() => handleToneChange('Bb')}></input></label></td>
                            <td><label>B<input type='checkbox' checked={tones.includes('B')} onChange={() => handleToneChange('B')}></input></label></td>
                            <td><label>C<input type='checkbox' checked={tones.includes('C')} onChange={() => handleToneChange('C')}></input></label></td>
                        </tr>
                        <tr>
                            <td><label>C#<input type='checkbox' checked={tones.includes('C#')} onChange={() => handleToneChange('C#')}></input></label></td>
                            <td><label>D<input type='checkbox' checked={tones.includes('D')} onChange={() => handleToneChange('D')}></input></label></td>
                            <td><label>Eb<input type='checkbox' checked={tones.includes('Eb')} onChange={() => handleToneChange('Eb')}></input></label></td>
                            <td><label>E<input type='checkbox' checked={tones.includes('E')} onChange={() => handleToneChange('E')}></input></label></td>
                        </tr>
                        <tr>
                            <td><label>F<input type='checkbox' checked={tones.includes('F')} onChange={() => handleToneChange('F')}></input></label></td>
                            <td><label>F#<input type='checkbox' checked={tones.includes('F#')} onChange={() => handleToneChange('F#')}></input></label></td>
                            <td><label>G<input type='checkbox' checked={tones.includes('G')} onChange={() => handleToneChange('G')}></input></label></td>
                            <td><label>Ab<input type='checkbox' checked={tones.includes('Ab')} onChange={() => handleToneChange('Ab')}></input></label></td>
                        </tr>
                    </tbody>

                </table>
            </div>

            <h3>Select Qualities</h3>

            <div>


                <table className='center'>
                    <tbody>
                        <tr>
                            <td><label>m7<input type='checkbox' checked={qualities.includes('m7')} onChange={() => handleQualitiesChange('m7')}></input></label></td>
                            <td><label>7<input type='checkbox' checked={qualities.includes('7')} onChange={() => handleQualitiesChange('7')}></input></label></td>
                            <td><label>maj7<input type='checkbox' checked={qualities.includes('maj7')} onChange={() => handleQualitiesChange('maj7')}></input></label></td>
                        </tr>
                    </tbody>
                </table>
                    
                    
                    
            </div>

            <h3>Select Length</h3>

            <div>
                <select name="chord-row-length" default={chordRowLength} onChange= {(e) => setChordRowLength(e.target.value)}>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8" selected>8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                </select>   
            </div>

        </div>
    )
    }

    export default Controls