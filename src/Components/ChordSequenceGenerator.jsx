import Controls from './Controls';
import ChordGrid from './ChordGrid';
import { useState } from 'react';

const ChordSequenceGenerator = () => {
    const [chordRowLength, setChordRowLength] = useState(8);
    const [tones, setTones] = useState([]);
    const [qualities, setQualities] = useState([]);

    return (
        <div>
            <hr />
            <Controls chordRowLength={chordRowLength} setChordRowLength={setChordRowLength} tones={tones} setTones={setTones} qualities={qualities} setQualities={setQualities}/>
            <hr />
            <ChordGrid chordRowLength={chordRowLength} tones={tones} qualities={qualities}/>
            <hr />
        </div>
    )
}

export default ChordSequenceGenerator