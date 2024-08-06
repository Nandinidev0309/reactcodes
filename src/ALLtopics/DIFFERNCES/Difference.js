

import React, { useEffect, useMemo, useState } from 'react';

function Components() {
    const [effect, setEffect] = useState(0);
    const [memo, setMemo] = useState(0);

    useEffect(() => {
        console.log("useEffect rendering");
    }, [effect]);

    useMemo(() => {
        console.log("useMemo rendering ");
    }, []);

    return (
        <div>
            <button onClick={() => setEffect(effect + 1)}>USEEFFECT</button>
            <br/>
            <button onClick={() => setMemo(memo + 1)}>USEMEMO</button>
        </div>
    );
}

export default Components;

